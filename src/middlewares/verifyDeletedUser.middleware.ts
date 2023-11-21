import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User.entity";
import { userRepository } from "../repositories";
import { AppError } from "../errors/App.error";

export const verifyDeletedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = req.params;

  const allUsers: User[] | null = await userRepository.createQueryBuilder().withDeleted().getMany();

  const foundUser: User | undefined = allUsers.find((user) => {
    return user.id == userId
})

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  if (foundUser.deletedAt === null) {
    throw new AppError("User not deleted", 409);
  }

  res.locals = { ...res.locals, foundUser: foundUser };

  return next();
};
