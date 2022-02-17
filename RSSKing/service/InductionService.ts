import { Induction, PrismaClient } from '@prisma/client'
import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';

async function insertInduction(induction: Induction) {
    const prisma = new PrismaClient();
    prisma.induction.create({
        data: induction
    })
}


