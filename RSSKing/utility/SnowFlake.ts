import { flow, pipe } from 'fp-ts/lib/function';
import curry from "fnts/curry";
import { IO } from 'fp-ts/lib/IO';
import { number } from 'fp-ts';

let cursor = 1;
  
export const now: IO<number> = () => {
    cursor++;
    cursor = cursor % 100;
    return new Date().getTime() + cursor;
}

const movesToRight = curry(function (digits: number, x: bigint): bigint {
    return x << BigInt(digits);
});

const subtraction = curry(function (small: bigint, big: bigint): bigint {
    return big - small;
})

const addBigInt = curry(function (small: bigint, big: bigint): bigint {
    return big + small;
})

export const getManySnowFlake = <T>(type: number) =>
    (A: T[]): [T, bigint][] =>
        A.map((item, index) => [item, pipe(type, getOneSnowFlake, addBigInt(BigInt(index)))])//atSameTime

export const getAtSameTimeSnowFlake = (type: number) => {
    const line = getOneSnowFlake(type);
    return (index: number) => pipe(line, pipe(index, BigInt, addBigInt))
}


export const getNowBigInt = flow(now, BigInt);

export const getOneSnowFlakeHead = flow(getNowBigInt, subtraction(BigInt(1644063714710)), movesToRight(22));

export const getOneSnowFlake =(type:number)=>{
    return pipe(type,BigInt, movesToRight(12), addBigInt(getOneSnowFlakeHead()));
} 


export enum SnowFlakeType {
    User,
    Resource,
    Induction,
}