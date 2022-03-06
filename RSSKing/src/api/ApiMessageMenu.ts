import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ResMessageMenu, ReqMessageMenu } from "../shared/protocols/PtlMessageMenu"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, groupByResource, insertToMenu } from "../../service/MessageWithPath";
import { map } from 'fp-ts/lib/Array';

export async function ApiMessageMenu(call: ApiCall<ReqMessageMenu, ResMessageMenu>) {
    try {
        pipe(call.req.userID, BigInt, getUnreadMessage)
            .then(data => {
                const record = pipe(data, groupByResource);
                insertToMenu(record, call.req.userID);
                const menu = pipe(record, Object.entries, map(item => item[0]), i => { return { data: i } });
                call.succ(menu)
            })
    }
    catch {
        call.error("ID 格式错误");
        return;
    }
    finally {
        return;
    }
}

