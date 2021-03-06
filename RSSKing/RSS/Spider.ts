import { PushMessage, Resource, UserSubscription } from '@prisma/client';
import { filter, map, mapWithIndex } from 'fp-ts/Array'
import * as T from 'fp-ts/lib/Task';
import { pipe } from 'fp-ts/lib/function';
const RSSHub = require('rsshub');
import { Rssml, Item } from './type';
import { Induction } from '@prisma/client'
import { getSomeResourceLastInduction, insertInduction, insertManyInduction } from '../service/InductionService'
import { flatten, forEach, reject } from 'ramda';
import { getAllResource } from "../service/ResourceService"
import { insertPushMessageMany } from "../service/pushMessageService"
import { getUserSubscriptionMany } from '../service/userSubscriptionService';
import { isArray } from '../utility/isArray';
import { server } from '../src/index'
import { getAtSameTimeSnowFlake, SnowFlakeType } from '../utility/SnowFlake';

RSSHub.init({
    // config
    CACHE_TYPE: null,
});






export const getRSS = async (resource: Resource): Promise<void> => {
    RSSHub.request(resource.resourcePath)
        .then(async (data: Rssml) => {
            const lastInduction = await getSomeResourceLastInduction(resource.resourceID);
            saveInductions(lastInduction, data, resource);
        })
        .catch((e: any) => {
            server.logger.error(e)
        });
}

export const logResource = pipe(
    getAllResource,
    T.map(map(getRSS)),
)

const isUnread = (lastInduction: Induction | null, data: Rssml): boolean => {
    if (lastInduction != null) {
        const newLocal = lastInduction.createtime.getDate() <= new Date().getDate();
        for (var i = data.item.length - 1; i >= 0; i--) {
            const item = data.item[i];
            if (isHaveDate(item)) {
                if (newLocal)
                    return true;
            } else {
                if (new Date(item.pubDate).getDate() >= lastInduction.createtime.getDate())
                    return true;
            }
        }
    }
    else
        return true;

    return false;
}

function saveInductions(lastInduction: Induction | null, data: Rssml, resource: Resource) {
    //server.logger.log(lastInduction, data)
    if (isUnread(lastInduction, data)) {
        const batchNumberMaker = getAtSameTimeSnowFlake(SnowFlakeType.Induction);
        const unreadInduction = pipe(data.item, map(dateUnity), filter(chooseUnreadItem(lastInduction)), mapWithIndex(toInduction(resource, batchNumberMaker)));
        if (unreadInduction.length == 0)
            return
        insertManyInduction(unreadInduction)
            .then(async () => {
                const users = await getUserSubscriptionMany(resource.resourceID).catch(e => console.log(e));
                if (isArray(users))
                    pipe(users, map(user => pipe(unreadInduction, map(toPushMessage(user, resource.resourceID)))), flatten, insertPushMessageMany)
            })
    }
}

function toPushMessage(user: UserSubscription, resourceID: BigInt): (a: Induction) => any {
    return (induction: Induction) => {
        return {
            userID: user.userID,
            inductionID: induction.inductionID,
            resourceID
        };
    };
}


function isHaveDate(item: Item) {
    return item.pubDate === "Invalid Date" || item.pubDate == null || item.pubDate == undefined;
}

function toInduction(resource: Resource, batchNumberMaker: (index: number) => bigint): (i: number, a: Item) => Induction {
    return (index, item) => {
        return {
            resourceID: resource.resourceID,
            title: item.title,
            description: item.description === null ? "" : item.description,
            url: item.link,
            createtime: item._pubDate,
            inductionID: batchNumberMaker(index)
        };
    };
}

function chooseUnreadItem(lastInduction: Induction | null): (value: Item) => boolean {
    return item => {
        if (lastInduction == null)
            return true;
        if (item._pubDate <= lastInduction.createtime)
            return false;
        else
            return true;
    };
}

function dateUnity(item: Item): Item {
    if (isHaveDate(item))
        item._pubDate = new Date();
    else
        item._pubDate = new Date(item.pubDate);
    return item;

}
