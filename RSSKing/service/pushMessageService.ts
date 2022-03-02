import { PrismaClient } from '@prisma/client'
import { map } from 'fp-ts/lib/Functor';


export const insertPushMessageMany = async (pushMessages: any[]) => {
    const prisma = new PrismaClient();
    prisma.pushMessage
        .createMany(
            {
                data: pushMessages
            })
        .finally(() => prisma.$disconnect())
}

export const getUnreadMessage = async (userID: bigint) => {
    const prisma = new PrismaClient()
    return prisma.pushMessage
        .findMany(
            {
                where: {
                    userID
                },
                include: {
                    Induction: true,
                    Resource: {
                        select: {
                            resourcePath: true
                        }
                    }
                }
            }
        )
        .finally(() => prisma.$disconnect())
}

