import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


export const getPrisma = () => {
    prisma.$connect()
    return prisma;
}