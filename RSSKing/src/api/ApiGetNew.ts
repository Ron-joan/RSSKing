import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqGetNew, ResGetNew } from "../shared/protocols/PtlGetNew"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, groupByResource } from "../../service/MessageWithPath";
import { map } from 'fp-ts/lib/Array';


export async function ApiGetNew(call: ApiCall<ReqGetNew, ResGetNew>) {
    try {
        pipe(call.req.userID, BigInt, getUnreadMessage)
            .then(data => {
                const temp = pipe(data, groupByResource, convertMessageWithPathToRSSPackage)
                pipe(temp, map(item => call.conn.sendMsg("New", { ...item })))
                pipe(temp, list => call.succ({ data: list }))
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