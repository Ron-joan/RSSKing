import { User, PrismaClient } from '@prisma/client'


export const insertUser = (user: User) => {
    const prisma = new PrismaClient();
    prisma.user.create({
        data: user
    }).finally(() => prisma.$disconnect())
}