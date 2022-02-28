import { PrismaClient } from '@prisma/client'

export const insertUserSubscription = (userSubscription: any) => {
    const prisma = new PrismaClient();
    prisma.userSubscription
        .create({
            data: userSubscription
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}

export const insertUserSubscriptionMany = (userSubscriptions: any[]) => {
    const prisma = new PrismaClient();
    prisma.userSubscription
        .createMany({
            data: userSubscriptions
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}

export const getUserSubscriptionMany = (resourceID: bigint) => {
    const prisma = new PrismaClient();
    return prisma.userSubscription
        .findMany({
            where: {
                resourceID: resourceID
            }
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}