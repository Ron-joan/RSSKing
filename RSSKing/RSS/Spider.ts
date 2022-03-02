import { PushMessage, Resource, UserSubscription } from '@prisma/client';
import { filter, map, mapWithIndex } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
const RSSHub = require('rsshub');


import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { Task } from 'fp-ts/lib/Task';
import { Rssml, Item } from './type';
import { Either } from 'fp-ts/Either'
import { Induction } from '@prisma/client'
import { getSomeResourceLastInduction, insertInduction, insertManyInduction } from '../service/InductionService'
import { flatten, forEach, reject } from 'ramda';
import { date } from 'fp-ts';
import { getManySnowFlake, getAtSameTimeSnowFlake } from "../utility/SnowFlake"
import { title } from 'process';
import internal from 'stream';
import { insertPushMessageMany } from "../service/pushMessageService"
import { getUserSubscriptionMany } from '../service/userSubscriptionService';

RSSHub.init({
    // config
});

export const getRSS = (resource: Resource): void => {
    RSSHub.request(resource.resourcePath)
        .then(async (data: Rssml) => {
            const lastInduction = await getSomeResourceLastInduction(resource.resourceID);
            saveInductions(lastInduction, data, resource);
        })
        .catch((e: any) => {
            console.log(e);
        });
}



const isUnread = (lastInduction: Induction | null, data: Rssml): boolean => {
    if (lastInduction != null) {
        const newLocal = lastInduction.createtime.getDate() <= new Date().getDate();
        for (var i = data.item.length - 1; i >= 0; i--) {
            const item = data.item[i];
            if (isHaveDate(item) && newLocal)
                return false;
        }
    }

    return true;
}

function saveInductions(lastInduction: Induction | null, data: Rssml, resource: Resource) {
    if (isUnread(lastInduction, data)) {
        const batchNumberMaker = getAtSameTimeSnowFlake(3);
        const unreadInduction = pipe(data.item, map(dateUnity), filter(chooseUnreadItem(lastInduction)), mapWithIndex(toInduction(resource, batchNumberMaker)));
        insertManyInduction(unreadInduction)
            .then(async () => {
                const users = await getUserSubscriptionMany(resource.resourceID).catch(e => console.log(e));
                if (isUserSubscription(users))
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

function isUserSubscription(pet: void | UserSubscription[]): pet is UserSubscription[] {
    return (<UserSubscription[]>pet).length !== undefined;
}

function isHaveDate(item: Item) {
    return item.pubDate === "Invalid Date" || item.pubDate == null;
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
