import { NewUserDTO } from "src/types/user";
import { PrismaClient, User } from "@prisma/client";
import { createHash } from "crypto";
import { GraphQLError } from "graphql";
import { Prisma } from "src/db/prismaClient";

export const createNewUser = async (_, req: NewUserDTO): Promise<User> => {
  const prisma = new PrismaClient();
  const { username, password } = req.newUserData;
  const hash = createHash("sha256");
  hash.update(password);
  const newPass = hash.digest("hex");
  const alreadyExist = await prisma.user.findUnique({
    where: { username: username },
  });

  if (alreadyExist) {
    throw new GraphQLError("USER_WITH_SAME_NAME_ALREADY_EXISTS", {
      extensions: { code: 400 },
    });
  }

  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: newPass,
    },
  });

  return newUser;
};
