

export interface ReqShowAllUser {
    userID: string,
}

export interface ResShowAllUser {
    data: User[]
}

type User = {
    userID: bigint,
    nickName:string
}