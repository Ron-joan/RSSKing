import { flow, pipe } from 'fp-ts/lib/function';
import curry from "fnts/curry";
import { IO } from 'fp-ts/lib/IO';
import { number } from 'fp-ts';

const now: IO<number> = () => new Date().getTime();

const movesToRight = curry(function (digits: number, x: bigint): bigint {
    return x << BigInt(digits);
});

const subtraction = curry(function (small: bigint, big: bigint): bigint {
    return big - small;
})

const addBigInt = curry(function (small: bigint, big: bigint): bigint {
    return big + small;
})

export const getManySnowFlake = <T>(A: T[], type: number): [T, bigint][] => {
    return A.map((item, index) => [item, pipe(type, getOneSnowFlake, addBigInt(BigInt(index)))])
}

export const getNowBigInt = flow(now, BigInt);

const getOneSnowFlakeHead = flow(getNowBigInt, subtraction(BigInt(1644063714710)), movesToRight(22));

export const getOneSnowFlake = flow(BigInt, movesToRight(12), addBigInt(getOneSnowFlakeHead()));