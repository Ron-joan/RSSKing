import { getNowBigInt, getOneSnowFlake } from '../utility/SnowFlake'
import { createResource } from "../service/ResourceService"

console.log(getOneSnowFlake(2));
createResource({
    resourceID: getOneSnowFlake(2),
    resourceType: 1,
    resourcePath: "/ui-cn/article"
})();