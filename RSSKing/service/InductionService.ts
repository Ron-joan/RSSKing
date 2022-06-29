import { Induction, PrismaClient } from '@prisma/client'
import { ordering } from 'fp-ts';
import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { getPrisma } from './databaseService';

export async function insertInduction(induction: Induction) {
    const prisma = getPrisma();
    prisma.induction
        .create({
            data: induction
        })
        .finally(() => prisma.$disconnect());
}

export const insertManyInduction = async (inductions: Induction[]) => {
    const prisma = getPrisma();
    return prisma.induction
        .createMany(
            {
                data: inductions
            }
        )
        .finally(() => { prisma.$disconnect() })
}

export async function getSomeResourceLastInduction(resourceID: bigint): Promise<Induction | null> {
    const prisma = getPrisma();
    return prisma.induction.findFirst({
        where: {
            resourceID: resourceID
        },
        orderBy: {
            createtime: "desc"
        },

    }).finally(() => prisma.$disconnect());
}



export const getKeyWordInduction =  async	(userID: bigint,keyword:string)=>{
    // const prisma = getPrisma();
    // const w = await prisma.$queryRaw
    //                     "SELECT  A1,A2,C1,C2      FROM  B     INNER JOIN User ON User.A1 = B.B1INNER JOIN C ON C.C1 = B.B1where    xxxxx  "
    
}


