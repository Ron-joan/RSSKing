import { User, PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';


export const insertUser = async (user: User) => {
    const prisma = getPrisma();
    await prisma.user.create({
        data: user
    }).finally(() => prisma.$disconnect())
}