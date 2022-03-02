import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqGetNew, ResGetNew } from "../shared/protocols/PtlGetNew"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, groupByResource } from "../../service/MessageWithPath";
import { map } from 'fp-ts/lib/Array';


export async function ApiGetNew(call: ApiCall<ReqGetNew, ResGetNew>) {
    try {
        const a = BigInt(call.req.userID);
        pipe(a, getUnreadMessage)
            .then(data => {
                pipe(data, groupByResource, convertMessageWithPathToRSSPackage, list => call.succ({ data: list }))
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