import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqSubscribe, ResSubscribe } from "../shared/protocols/PtlSubscribe";
import { insertUserSubscription } from "../../service/userSubscriptionService";
import { findResource, createResource } from "../../service/ResourceService";
import { SnowFlakeType, getOneSnowFlake } from "../../utility/SnowFlake"


export async function ApiSubscribe(call: ApiCall<ReqSubscribe, ResSubscribe>) {
    const { userID, resourcePath } = call.req;
    findResource(resourcePath)
        .then(item => {
            if (item == null) {
                const resourceID = getOneSnowFlake(SnowFlakeType.Resource)
                createResource({
                    resourceID,
                    resourceType: 0,
                    resourcePath
                })
                insertUserSubscription({
                    userID: BigInt(userID),
                    resourceID
                })
            } else {
                insertUserSubscription({
                    userID,
                    resourceID: item.resourceID
                })
            }
            call.succ({});
        })
        .catch(() => {
            call.error("增加失败");
        })
}