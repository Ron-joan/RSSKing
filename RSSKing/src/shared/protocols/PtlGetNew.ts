import { RSSPackage } from "../../../service/MessageWithPath"
export interface ReqGetNew {
    userID: string,
    resourcePath:string
}

export interface ResGetNew {
    data: RSSPackage
}