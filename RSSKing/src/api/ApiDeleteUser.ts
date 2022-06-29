import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqDeleteUser, ResDeleteUser } from "../shared/protocols/PtlDeleteUser"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, groupByResource, insertToMenu } from "../../service/MessageWithPath";
import { findUser, deleteUser } from "../../service/userService";
import { map } from 'fp-ts/lib/Array';
import { assert } from 'console';

export async function ApiDeleteUser(call: ApiCall<ReqDeleteUser, ResDeleteUser>) {
    findUser(BigInt(call.req.userID)).then(user => {
        assert(user != null);
        assert(user?.userType == 1);
        deleteUser(BigInt(call.req.targetUserID));
        call.succ({})
    })
        .catch(() => call.error("该用户不是管理员"))
}

