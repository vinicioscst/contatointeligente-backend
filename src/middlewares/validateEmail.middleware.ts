import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/App.error";


export const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let email: string = req.body.email;

  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (foundUser) {
    throw new AppError("User already registered with this email", 409);
  }

  return next();
};
