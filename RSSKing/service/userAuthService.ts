import { UserAuth, PrismaClient } from '@prisma/client'

export const insertUserAuth = (userAuth: any) => {
    const prisma = new PrismaClient();
    prisma.userAuth
        .create({
            data: userAuth
        })
        .catch(e => console.log(e))
        .finally(() => prisma.$disconnect())
}


export enum identityType {
    Local,
    Other
}