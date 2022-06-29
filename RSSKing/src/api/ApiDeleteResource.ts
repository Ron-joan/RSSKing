import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqDeleteResource, ResDeleteResource } from "../shared/protocols/PtlDeleteResource"
import { deleteOneResource } from '../../service/ResourceService';
import { findUser, deleteUser } from "../../service/userService";
import { map } from 'fp-ts/lib/Array';
import { assert } from 'console';

export async function ApiDeleteResource(call: ApiCall<ReqDeleteResource, ResDeleteResource>) {
    findUser(BigInt(call.req.userID)).then(user => {
        assert(user != null);
        assert(user?.userType == 1);
        deleteOneResource(BigInt(call.req.targetResourceID));
        call.succ({})
    })
        .catch(() => call.error("该用户不是管理员"))
}

