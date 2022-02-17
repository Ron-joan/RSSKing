import { Induction, PrismaClient } from '@prisma/client'
import { flow } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';

const prisma = new PrismaClient();

export const g : IO<Induction> = prisma.induction.findMany.bind(prisma);
export const c:IO<void> = prisma.induction.create.bind(prisma);


// export async function insertInduction(induction:Induction){
//     const prisma = new PrismaClient();
//     prisma.induction.create({
//         data:induction
//     }).then(
        
//     )

//     const find = prisma.induction.findMany.bind(prisma)
// }