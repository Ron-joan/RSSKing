import { Resource, PrismaClient } from '@prisma/client';
import { map } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
const RSSHub = require('rsshub');


import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { cons } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { Task } from 'fp-ts/lib/Task';
import { Rssml } from './type'

RSSHub.init({
    // config
});

export const getRSS = (resource: Resource): void => {
    RSSHub.request(resource.resourcePath)
        .then((data: Rssml) => {
            console.log(data.item[0]);
        })
        .catch((e: any) => {
            console.log(e);
        });
}