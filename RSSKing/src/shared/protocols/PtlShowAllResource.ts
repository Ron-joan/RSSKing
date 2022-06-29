export interface ReqShowAllResource {
    userID: string,
}

export interface ResShowAllResource {
    data: Resource[]
}

type Resource = {
    resourceID: bigint,
    resourcePath:string
}