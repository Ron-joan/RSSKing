
import { getNowBigInt, getOneSnowFlake } from '../utility/SnowFlake'
import { createResource, getAllResource } from "../service/ResourceService"
import { getRSS } from "../RSS/Spider"
import { chain, chainIOK, Task, map } from 'fp-ts/lib/Task';
import { IO } from 'fp-ts/lib/IO';
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/lib/function';
import { Resource } from '@prisma/client';
import { chainFirst } from 'fp-ts/lib/Chain';
import { getSomeResourceLastInduction } from "../service/InductionService"
import * as Console from 'fp-ts/Console'
const RSSHub = require('rsshub');

const logResource = pipe(
    getAllResource,
    map(A.map(getRSS)),
)

// getSomeResourceLastInduction(BigInt(4406258455027712)).then((i) => {
//     console.log(i?.createtime);
// });

logResource();
// RSSHub.request("/ui-cn/article")
// .then((data: any) => {
//     console.log(data);
// })
// .catch((e: any) => {
//     console.log(e);
// });;