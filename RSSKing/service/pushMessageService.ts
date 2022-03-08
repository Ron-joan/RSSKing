import { PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';


export const insertPushMessageMany = async (pushMessages: any[]) => {
    const prisma = getPrisma();
    prisma.pushMessage
        .createMany(
            {
                data: pushMessages
            })
        .finally(() => prisma.$disconnect())
}

export const getUnreadMessage = async (userID: bigint) => {
    const prisma = getPrisma()
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

