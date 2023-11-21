import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { isAdmin } = res.locals;

  if (isAdmin) return next();

  throw new AppError("Insufficient permission", 403)
};