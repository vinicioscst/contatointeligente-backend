import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User.entity";
import { userRepository } from "../repositories";
import { AppError } from "../errors/App.error";

export const validateUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const foundUser: User | null = await userRepository.findOneBy({ id });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, foundUser: foundUser };

  return next();
};
