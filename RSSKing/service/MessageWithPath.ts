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
