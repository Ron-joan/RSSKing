import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqShowAllUser, ResShowAllUser } from "../shared/protocols/PtlShowAllUser"
import { getUnreadMessage, insertPushMessageMany } from '../../service/pushMessageService';
import { convertMessageWithPathToRSSPackage, groupByResource, insertToMenu } from "../../service/MessageWithPath";
import { findUser, findAllNormalUser } from "../../service/userService";
import { map } from 'fp-ts/lib/Array';
import { assert } from 'console';

export async function ApiShowAllUser(call: ApiCall<ReqShowAllUser, ResShowAllUser>) {
    findUser(BigInt(call.req.userID)).then(user => {
        assert(user != null);
        assert(user?.userType == 1);
        return findAllNormalUser();
    })
        .then(users => {
            call.succ({ data: users.map(item => { return { userID: item.ID, nickName: item.nickName } }) })
        })
        .catch(() => call.error("该用户不是管理员"))
}

