import { Resource, PrismaClient } from '@prisma/client';
import { Task } from 'fp-ts/lib/Task';
import { getPrisma } from './databaseService';

export const createResource = (resource: Resource) => {
    const prisma = getPrisma();
    prisma.resource.create({
        data: resource
    })
    .catch(e => console.log(e))
    .finally(() => prisma.$disconnect())
}

export const getAllResource : Task<Resource[]> = async () => {
    const prisma = getPrisma();
    return prisma.resource.findMany().finally(()=>{
        prisma.$disconnect();
    });
}