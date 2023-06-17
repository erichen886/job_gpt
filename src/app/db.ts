import { PrismaClient } from "@prisma/client";
/* 
    NextJS likes to hotreload in dev mode. Prisma has issues with this. Below is the fix
    https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
*/

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

//This is instantiating a singleton
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
