import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqShowAllResource, ResShowAllResource } from "../shared/protocols/PtlShowAllResource"
import { findResource, findResourceMany } from "../../service/ResourceService";
import { findUser, findAllNormalUser } from "../../service/userService";
import { map } from 'fp-ts/lib/Array';
import { assert } from 'console';

export async function ApiShowAllResource(call: ApiCall<ReqShowAllResource, ResShowAllResource>) {
    findUser(BigInt(call.req.userID)).then(user => {
        assert(user != null);
        assert(user?.userType == 1);
        return findResourceMany();
    })
        .then(resources => {
            call.succ({ data: resources.map(item => { return { resourceID: item.resourceID, resourcePath: item.resourcePath } }) })
        })
        .catch(() => call.error("该用户不是管理员"))
}

