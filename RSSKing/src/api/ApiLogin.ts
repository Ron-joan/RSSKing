import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqLogin, ResLogin } from "../shared/protocols/PtlLogin"
import { readUserAuth } from "../../service/userAuthService";
import { map } from 'fp-ts/lib/Array';
import { log } from '../../utility/log';
import { isNonEmptyArray } from '../../utility/isArray';
import assert from 'assert';


export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    try {
        const { identifier, credential } = call.req;
        readUserAuth(identifier)
            .then((user) => {
                try {
                    assert(user != undefined);
                    assert(user != null)
                    call.succ({ userID: user.User.ID, nickName: user.User.nickName, userType: user.User.userType, code: 200 })
                }
                catch {
                    call.error("账户或者密码存在错误")
                }
            })
    }
    catch {
        call.error("登录过程出错");
        return;
    }
    finally {
        return;
    }
}

