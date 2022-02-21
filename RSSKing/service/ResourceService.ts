import { Resource, PrismaClient } from '@prisma/client';
import { flow } from 'fp-ts/lib/function';
import { Task } from 'fp-ts/lib/Task';

export const createResource = (resource: Resource): Task<void> => async () => {
    const prisma = new PrismaClient();
    await prisma.resource.create({
        data: resource
    })
    prisma.$disconnect();
}

export const getAllResource : Task<Resource[]> = async () => {
    const prisma = new PrismaClient();
    return prisma.resource.findMany().finally(()=>{
        console.log(1)
        prisma.$disconnect();
    });
}