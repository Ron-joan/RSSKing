import { PrismaClient } from '@prisma/client'
import { where } from 'ramda';
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

export const insertPushMessage = async (pushMessages: any) => {
    const prisma = getPrisma();
    prisma.pushMessage
        .createMany(
            {
                data: pushMessages
            })
        .finally(() => prisma.$disconnect())
}

export const deletePushMessage = async (UserID: bigint, InductionID: bigint) => {
    const prisma = getPrisma()
    const pm = await prisma.pushMessage
        .findFirst({
            where: {
                inductionID: InductionID,
                userID: UserID
            }
        })
    prisma.pushMessage
        .delete(
            {
                where: {
                    id: pm?.id
                },
            }
        )
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

