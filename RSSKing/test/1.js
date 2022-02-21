"use strict";
exports.__esModule = true;
var SnowFlake_1 = require("../utility/SnowFlake");
var InductionService_1 = require("../service/InductionService");
var RSSHub = require('rsshub');
var lr = function (s) { return function () { return console.log(s[0]()); }; };
var addAtEnd = function (b) { return function (a) { return a + b; }; };
var getHello = function () { return Promise.resolve('hello'); };
(0, InductionService_1.getSomeResourceLastInduction)(BigInt(4406258455027712));
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
console.log((0, SnowFlake_1.getOneSnowFlake)(1));
// RSSHub.request("/ui-cn/article")
// .then((data: any) => {
//     console.log(data);
// })
// .catch((e: any) => {
//     console.log(e);
// });;
