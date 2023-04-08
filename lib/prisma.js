import { PrismaClient } from "@prisma/client";

let prisma;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    let globalWithPrisma = {
      prisma: PrismaClient,
    };
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient();
    }
    prisma = globalWithPrisma.prisma;
  }
}

export default prisma;
