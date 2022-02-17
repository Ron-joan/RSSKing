import { flow } from 'fp-ts/lib/function';
import curry from "fnts/curry";
import { IO } from 'fp-ts/lib/IO';

const now: IO<number> = () => new Date().getTime()

const movesToRight = curry(function (digits: number, x: bigint): bigint {
    return x << BigInt(digits);
});

const subtraction = curry(function (small: bigint, big: bigint): bigint {
    return big - small;
})

const addBigInt = curry(function (small: bigint, big: bigint): bigint {
    return big + small;
})

export const getNowBigInt = flow(now, BigInt);

const getOneSnowFlakeHead = flow(getNowBigInt, subtraction(BigInt(1644063714710)), movesToRight(22));

export const getOneSnowFlake = flow(BigInt, movesToRight(12), addBigInt(getOneSnowFlakeHead()));