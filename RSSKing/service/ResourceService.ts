import { Resource, PrismaClient } from '@prisma/client';
import { Task } from 'fp-ts/lib/Task';
import { getPrisma } from './databaseService';

export const createResource = (resource: Resource): Task<void> => async () => {
    const prisma = getPrisma();
    await prisma.resource.create({
        data: resource
    })
    prisma.$disconnect();
}

export const getAllResource : Task<Resource[]> = async () => {
    const prisma = getPrisma();
    return prisma.resource.findMany().finally(()=>{
        prisma.$disconnect();
    });
}