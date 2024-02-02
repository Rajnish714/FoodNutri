import { PrismaClient } from "@prisma/client";

export function Prisma() {
  const dbCon = new PrismaClient();
  dbCon.$connect();
  return dbCon;
}
