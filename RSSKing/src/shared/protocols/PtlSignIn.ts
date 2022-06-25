
export interface ReqSignIn {
    nickName:string,
    credential:string
}

export interface ResSignIn {
    identifier: string,
    code:number
}