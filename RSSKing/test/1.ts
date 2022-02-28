
import { getNowBigInt, getOneSnowFlake, SnowFlakeType } from '../utility/SnowFlake'
import { createResource, getAllResource } from "../service/ResourceService"
import { getRSS } from "../RSS/Spider"
import { chain, chainIOK, Task, map } from 'fp-ts/lib/Task';
import { IO } from 'fp-ts/lib/IO';
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/lib/function';
import { Resource, User, UserAuth } from '@prisma/client';
import { chainFirst } from 'fp-ts/lib/Chain';
import { insertUser } from '../service/userService'
import { insertUserSubscription, insertUserSubscriptionMany } from '../service/userSubscriptionService'
import { identityType, insertUserAuth } from '../service/userAuthService'
import { getSomeResourceLastInduction } from "../service/InductionService"
import * as Console from 'fp-ts/Console'
import { insertPushMessageMany } from '../service/pushMessageService';
const RSSHub = require('rsshub');

const logResource = pipe(
    getAllResource,
    map(A.map(getRSS)),
)

const a = [
    {
        userID: BigInt(7831565035913216),
        resourceID: BigInt(7570364376813568)
    },
    {
        userID: BigInt(7831565035913216),
        resourceID: BigInt(7570648536715264)
    }
]

//insertUserSubscriptionMany(a)

// getSomeResourceLastInduction(BigInt(4406258455027712)).then((i) => {
//     console.log(i?.createtime);
// });
//insertPushMessageMany([{ userID: BigInt(13), inductionID: BigInt(15) }])
logResource();
// RSSHub.request("/ui-cn/article")
// .then((data: any) => {
//     console.log(data);
// })
// .catch((e: any) => {
//     console.log(e);
// });;