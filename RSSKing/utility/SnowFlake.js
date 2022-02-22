"use strict";
exports.__esModule = true;
exports.getOneSnowFlake = exports.getNowBigInt = exports.getManySnowFlake = void 0;
var function_1 = require("fp-ts/lib/function");
var curry_1 = require("fnts/curry");
var now = function () { return new Date().getTime(); };
var movesToRight = (0, curry_1["default"])(function (digits, x) {
    return x << BigInt(digits);
});
var subtraction = (0, curry_1["default"])(function (small, big) {
    return big - small;
});
var addBigInt = (0, curry_1["default"])(function (small, big) {
    return big + small;
});
var getManySnowFlake = function (A, type) {
    return A.map(function (item, index) { return [item, (0, function_1.pipe)(type, exports.getOneSnowFlake, addBigInt(BigInt(index)))]; });
};
exports.getManySnowFlake = getManySnowFlake;
exports.getNowBigInt = (0, function_1.flow)(now, BigInt);
var getOneSnowFlakeHead = (0, function_1.flow)(exports.getNowBigInt, subtraction(BigInt(1644063714710)), movesToRight(22));
exports.getOneSnowFlake = (0, function_1.flow)(BigInt, movesToRight(12), addBigInt(getOneSnowFlakeHead()));
