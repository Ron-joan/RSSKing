import { Induction, PrismaClient } from '@prisma/client'
import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';

async function insertInduction(induction: Induction) {
    const prisma = new PrismaClient();
    prisma.induction.create({
        data: induction
    }).finally(prisma.$disconnect);
}

export async function getSomeResourceLastInduction(resourceID: bigint): Promise<Induction | null> {
    const prisma = new PrismaClient();
    return prisma.induction.findFirst({
        where: {
            resourceID: resourceID
        }
    }).finally(prisma.$disconnect);
}

function autoGetSnowFlakeID(induction: Induction) {

}


