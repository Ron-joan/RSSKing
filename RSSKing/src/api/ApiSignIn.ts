import { pipe } from 'fp-ts/lib/function';
import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqSignIn, ResSignIn } from "../shared/protocols/PtlSignIn"
import { insertUserAuth } from "../../service/userAuthService";
import { insertUser } from "../../service/userService";
import { map } from 'fp-ts/lib/Array';
import { SnowFlakeType ,getOneSnowFlake } from '../../utility/SnowFlake';
import assert from 'assert';


export async function ApiSignIn(call: ApiCall<ReqSignIn, ResSignIn>) {
    try {
        const { nickName, credential } = call.req;

        const userID = getOneSnowFlake(SnowFlakeType.User);
        const identifier = userID.toString().substring(5);
        
        insertUser({
            ID:userID,
            nickName:nickName,
            userType:0
        }).then(()=>{
            
            insertUserAuth({
                identityType:0,
                userID:userID,
                identifier:identifier,
                credential:credential
            })
            call.succ({code:200,identifier:identifier})
        })
    }
    catch {
        call.error("注册失败");
        return;
    }
    finally {
        return;
    }
}

