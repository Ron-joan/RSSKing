import { PrismaClient, PushMessage } from '@prisma/client'

export const insertPushMessageMany = async (pushMessages: any[]) => {
    const prisma = new PrismaClient();
    prisma.pushMessage
        .createMany(
            {
                data: pushMessages
            })
        .finally(() => prisma.$disconnect())
}