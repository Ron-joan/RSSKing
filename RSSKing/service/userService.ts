import { User, PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';


export const insertUser = async (user: User) => {
    const prisma = getPrisma();
    await prisma.user.create({
        data: user
    }).finally(() => prisma.$disconnect())
}

export const findAllNormalUser = async () => {
    const prisma = getPrisma();
    return await prisma.user.findMany({
        where: {
            userType: 0
        }
    }).finally(() => prisma.$disconnect())
}

export const findUser = async (userID: bigint) => {
    const prisma = getPrisma();
    return await prisma.user.findFirst({
        where: {
            ID: userID
        }
    }).finally(() => prisma.$disconnect())
}

export const deleteUser = async (userID: bigint) => {
    const prisma = getPrisma();
    return await prisma.user.delete({
        where: {
            ID: userID
        }
    }).finally(() => prisma.$disconnect())
}