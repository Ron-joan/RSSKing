import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqDissubscribe,ResDissubscribe } from "../shared/protocols//PtlDissubscribe";
import { deleteUserSubscription } from "../../service/userSubscriptionService";
import { findResource, createResource } from "../../service/ResourceService";
import { SnowFlakeType, getOneSnowFlake } from "../../utility/SnowFlake"


export async function ApiDissubscribe(call: ApiCall<ReqDissubscribe,ResDissubscribe>) {
    const { userID, resourcePath } = call.req;
    findResource(resourcePath)
        .then(item => {
            if (item == null) {

            } else {
                deleteUserSubscription(
                    BigInt(userID),
                    item.resourceID
                )
            }
            call.succ({});
        })
        .catch(() => {
            call.error("删除失败");
        })
}