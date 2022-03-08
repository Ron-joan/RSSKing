import { groupBy, NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';


type Induction = {
    resourceID: bigint
    title: string
    description: string
    createtime: Date
    url: string
    inductionID: bigint
}

type PushMessage = {
    userID: bigint
    inductionID: bigint
    id: number
    resourceID: bigint
}

const recordCache = new Map<string, Record<string, NonEmptyArray<MessageWithPath>>>();

export type MessageWithPath = (PushMessage & {
    Induction: Induction;
    Resource: {
        resourcePath: string;
    };
});
export type RSSPackage = {
    resourcePath: string;
    inductionList: Induction[];
};

export const groupByResource = (messages: MessageWithPath[]) => {
    return groupBy((item: MessageWithPath) => item.Resource.resourcePath)(messages);
};

export const insertToMenu = (record: Record<string, NonEmptyArray<MessageWithPath>>, userID: string) => {
    recordCache.set(userID, record)
}

export const convertMessageWithPathToRSSPackage = (record: Record<string, NonEmptyArray<MessageWithPath>>) => {
    const RP: RSSPackage[] = [];
    for (const [key, value] of Object.entries(record)) {
        const temp: RSSPackage = {
            resourcePath: key,
            inductionList: value.map(item => item.Induction)
        };
        RP.push(temp);
    }
    return RP;
};

export const getOneFromCache = (userID: string, resourcePath: string) => {
    const record = recordCache.get(userID);
    if (record === undefined) {
        const a: NonEmptyArray<MessageWithPath> = [{
            inductionID: BigInt(1),
            resourceID: BigInt(1),
            userID: BigInt(1),
            id: 0,
            Induction: {
                inductionID: BigInt(1),
                description: "",
                title: "",
                url: "",
                createtime: new Date(),
                resourceID: BigInt(1),
            },
            Resource: {
                resourcePath: ""
            }

        }];
        return a
    }
    return record[resourcePath];
}
