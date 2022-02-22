import { Resource } from '@prisma/client';
import { map } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
const RSSHub = require('rsshub');


import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { cons } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { Task } from 'fp-ts/lib/Task';
import { Rssml } from './type';
import { Induction } from '@prisma/client'
import { getSomeResourceLastInduction, insertInduction } from '../service/InductionService'
import { forEach, reject } from 'ramda';
import { date } from 'fp-ts';
import { getManySnowFlake } from "../utility/SnowFlake"
import { title } from 'process';
import internal from 'stream';

RSSHub.init({
    // config
});

export const getRSS = (resource: Resource): void => {
    RSSHub.request(resource.resourcePath)
        .then(async (data: Rssml) => {
            const lastInduction = await getSomeResourceLastInduction(resource.resourceID);
            const flag = check(lastInduction, data);
            if (flag)
                data.item
                    .map(item => {
                        if (item.pubDate === "Invalid Date")
                            item._pubDate = new Date();
                        else
                            item._pubDate = new Date(item.pubDate);
                        return item;
                    })
                    .filter(item => {
                        if (lastInduction == null)
                            return true;
                        if (item._pubDate <= lastInduction.createtime)
                            return false;
                        else
                            return true;

                    })
                    .forEach(item => {
                        const i = {
                            resourceID: resource.resourceID,
                            title: item.title,
                            description: item.description === null ? "" : item.description,
                            url: item.link,
                            createtime: item._pubDate,
                        }
                        console.log(item.title)
                        console.log(item.description?.length)
                        insertInduction(i);
                    })
        })
        .catch((e: any) => {
            console.log(e);
        });
}

const check = (lastInduction: Induction | null, data: Rssml): boolean => {
    if (lastInduction != null) {
        const newLocal = lastInduction.createtime.getDate() <= new Date().getDate();
        for (var i = data.item.length - 1; i >= 0; i--) {
            const item = data.item[i];
            if (item.pubDate === "Invalid Date" && newLocal) {
                return false;
            }
        }
    }
    return true;
}