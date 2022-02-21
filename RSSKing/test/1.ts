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

const lr = (s: any): IO<void> => () => console.log(s[0]())
const addAtEnd = (b: string) => (a: string): string => a + b;
const getHello = () => Promise.resolve('hello');

getSomeResourceLastInduction(BigInt(4406258455027712));

// // logHelloAndWorld()

// const logHelloAndWorld = pipe(
//     getHello,
//     map(addAtEnd(' world')),
//     chainIOK(Console.log)
// )

// const logResource = pipe(
//     getAllResource,
//     map(A.map(getRSS)),

// )

// logResource()

console.log(getOneSnowFlake(1));
// RSSHub.request("/ui-cn/article")
// .then((data: any) => {
//     console.log(data);
// })
// .catch((e: any) => {
//     console.log(e);
// });;