import { Resource, PrismaClient } from '@prisma/client';
import { BinaryLike } from 'crypto';
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

export const getAllResource: Task<Resource[]> = async () => {
    const prisma = getPrisma();
    return prisma.resource.findMany().finally(() => {
        prisma.$disconnect();
    });
}

export const findResource = async (resourcePath: string) => {
    const prisma = getPrisma();
    return await prisma.resource
        .findFirst({
            where: {
                resourcePath
            }
        }).finally(() => prisma.$disconnect())
}

export const findResourceMany = async () => {
    const prisma = getPrisma();
    return await prisma.resource
        .findMany().finally(() => prisma.$disconnect())
}

export const deleteOneResource = async (resourceID: bigint) => {
    const prisma = getPrisma();
    prisma.resource
        .delete({
            where: {
                resourceID: resourceID
            }
        })
        .finally(() => prisma.$disconnect())
}