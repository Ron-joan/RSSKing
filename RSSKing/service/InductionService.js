"use strict";
exports.__esModule = true;
exports.c = exports.g = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.g = prisma.induction.findMany.bind(prisma);
exports.c = prisma.induction.create.bind(prisma);
// export async function insertInduction(induction:Induction){
//     const prisma = new PrismaClient();
//     prisma.induction.create({
//         data:induction
//     }).then(
//     )
//     const find = prisma.induction.findMany.bind(prisma)
// }
