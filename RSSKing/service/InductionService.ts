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

function autoGetSnowFlakeID(induction: Induction) {

}


