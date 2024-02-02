import { NewUserDTO } from "src/types/user";
import { PrismaClient, User } from "@prisma/client";
import { createHash } from "crypto";

export const createNewUser = async (_, req: NewUserDTO): Promise<User> => {
  const prisma = new PrismaClient();
  const { username, password } = req.newUserData;
  const hash = createHash("sha256");
  hash.update(password);
  const newPass = hash.digest("hex");
  const newUser = await prisma.user
    .create({
      data: {
        username: username,
        password: newPass,
      },
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
  return newUser;
};
