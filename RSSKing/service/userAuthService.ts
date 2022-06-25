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

export const readUserAuth = async (identifier:string)=>{
    const prisma = getPrisma();
    const user = await prisma.userAuth
                        .findFirst({
                            where:{identifier:identifier},
                            include:{
                                User:true
                            }
                        })
                        .catch(e => console.log(e))
                        .finally(() => prisma.$disconnect())
    return user
}

export enum identityType {
    Local,
    Other
}