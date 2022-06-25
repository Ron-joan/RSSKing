export interface ReqLogin {
    identifier: string,
    credential:string
}

export interface ResLogin {
    userID:bigint,
    nickName:string,
    userType:number,
    code:number
}