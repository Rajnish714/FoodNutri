import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import { GetUserByIdDTO } from "src/types/user";

export const getAllUsers = async () => {
  const db = new PrismaClient();
  const user = await db.user.findMany();
  return user;
};
