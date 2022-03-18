import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';

export function isNonEmptyArray<T>(array: NonEmptyArray<T> | undefined): array is NonEmptyArray<T> {
    return (<NonEmptyArray<T>>array).length !== undefined;
}

export function isArray<T>(array: T[] | void): array is T[] {
    return (<T[]>array).length !== undefined;
}
