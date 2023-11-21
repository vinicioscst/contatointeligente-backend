import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const validateUserPermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { userId, admin } = res.locals;

  if (admin) {
    return next();
  }

  if (id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};