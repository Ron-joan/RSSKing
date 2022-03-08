import { User, PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';


export const insertUser = (user: User) => {
    const prisma = getPrisma();
    prisma.user.create({
        data: user
    }).finally(() => prisma.$disconnect())
}