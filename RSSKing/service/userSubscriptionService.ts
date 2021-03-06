import { PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';

export const insertUserSubscription = (userSubscription: any) => {
    const prisma = getPrisma();
    prisma.userSubscription
        .create({
            data: userSubscription
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}

export const insertUserSubscriptionMany = (userSubscriptions: any[]) => {
    const prisma = getPrisma();
    prisma.userSubscription
        .createMany({
            data: userSubscriptions
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}

export const deleteUserSubscription = async (userID: bigint, resourceID: bigint) => {
    const prisma = getPrisma();
    const item = await prisma.userSubscription.findFirst({
        where: {
            userID,
            resourceID
        }
    })
    prisma.userSubscription.delete({
        where: {
            ID: item?.ID
        }
    }).finally(() => prisma.$disconnect())
}

export const getUserSubscriptionMany = (resourceID: bigint) => {
    const prisma = getPrisma();
    return prisma.userSubscription
        .findMany({
            where: {
                resourceID: resourceID
            }
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}