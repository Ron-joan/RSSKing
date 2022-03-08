import { UserAuth, PrismaClient } from '@prisma/client'
import { getPrisma } from './databaseService';

export const insertUserAuth = (userAuth: any) => {
    const prisma = getPrisma();
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