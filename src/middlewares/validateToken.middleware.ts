import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/App.error";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;

  if (!authorization) throw new AppError("Missing token", 401)

  const token = authorization.split(" ")[1];

  if (!token) throw new AppError("Missing token", 401);

  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }

    res.locals.id = decoded.sub
    res.locals.isAdmin = decoded.isAdmin

    return next();
  });
};
