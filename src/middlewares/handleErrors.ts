import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({ message: error.flatten().fieldErrors });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({ message: error.message });
  }

  return res.status(500).json({ error: error.message });
};

export { handleErrors };
