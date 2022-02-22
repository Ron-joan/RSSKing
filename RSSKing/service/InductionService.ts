import { Induction, PrismaClient } from '@prisma/client'
import { ordering } from 'fp-ts';
import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';

export async function insertInduction(induction: any) {
    const prisma = new PrismaClient();
    prisma.induction
        .create({
            data: induction
        })
        .finally(() => prisma.$disconnect());
}

export async function getSomeResourceLastInduction(resourceID: bigint): Promise<Induction | null> {
    const prisma = new PrismaClient();
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


