import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import { GetUserByIdDTO } from "src/types/user";

export const getUserById = async (_, req: GetUserByIdDTO) => {
  const db = new PrismaClient();
  try {
    const user = await db.user.findUniqueOrThrow({
      where: { user_id: req.id },
    });
    return user;
  } catch (err) {
    console.log(err);
    const error = err as Error;
    throw new GraphQLError(error.message, {
      extensions: { code: 400 },
    });
  }
};
