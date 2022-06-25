import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqGetNew, ResGetNew } from "../shared/protocols/PtlGetNew"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, getOneFromCache, groupByResource, MessageWithPath, RSSPackage } from "../../service/MessageWithPath";
import { map } from 'fp-ts/lib/Array';
import { log } from '../../utility/log';
import { isNonEmptyArray } from '../../utility/isArray';


export async function ApiGetNew(call: ApiCall<ReqGetNew, ResGetNew>) {
    try {
        const { userID, resourcePath } = call.req;
        const record = getOneFromCache(userID, resourcePath);
        if (isNonEmptyArray(record)) {
            const temp: RSSPackage = {
                resourcePath: record[0].Resource.resourcePath,
                inductionList: record.map(item => item.Induction)
            };
            call.succ({ data: temp })
        }
    }
    catch {
        call.error("ID 格式错误");
        return;
    }
    finally {
        return;
    }
}

