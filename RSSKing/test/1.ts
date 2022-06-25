
import { flow } from 'fp-ts/lib/function'
import { getOneSnowFlake, SnowFlakeType, now, getAtSameTimeSnowFlake, getOneSnowFlakeHead } from '../utility/SnowFlake'
import { insertUser } from '../service/userService'
import { identityType, insertUserAuth } from '../service/userAuthService'
import { createResource } from '../service/ResourceService'
import { insertUserSubscription } from '../service/userSubscriptionService'


export const test = () => {
    const userID = getOneSnowFlake(SnowFlakeType.User)
    insertUser({
        ID: userID,
        nickName: "one",
        userType: 1
    })

    setTimeout(() => {
        insertUserAuth({
            userID: userID,
            identityType: identityType.Local,
            identifier: "1",
            credential: "1"
        })
    }, 5000);



    const resourceID = getOneSnowFlake(SnowFlakeType.Resource)
    createResource({
        resourceID: resourceID,
        resourceType: 0,
        resourcePath: '/open163/latest'
    })

    setTimeout(() => {
        insertUserSubscription({
            userID: userID,
            resourceID: resourceID
        })
    }, 5000);

    console.log(userID)
}




//insertUserSubscriptionMany(a)

// getSomeResourceLastInduction(BigInt(4406258455027712)).then((i) => {
//     console.log(i?.createtime);
// });
//insertPushMessageMany([{ userID: BigInt(13), inductionID: BigInt(15) }])
//logResource();

// const as = []
// for (var i = 0; i < 10; i++) {
//     as.push(getAtSameTimeSnowFlake(SnowFlakeType.Induction))
//     console.log(getOneSnowFlake(SnowFlakeType.Induction))
//     console.log(getOneSnowFlakeHead())
// }

// as.push(getAtSameTimeSnowFlake(SnowFlakeType.Induction))
// as.forEach(item=>{
//     console.log(item(1))
// })
// RSSHub.request("/ui-cn/article")
// .then((data: any) => {
//     console.log(data);
// })
// .catch((e: any) => {
//     console.log(e);
// });;