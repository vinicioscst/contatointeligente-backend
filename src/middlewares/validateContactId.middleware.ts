import { NextFunction, Request, Response } from "express";
import { contactRepository } from "../repositories";
import { AppError } from "../errors/App.error";
import { Contact } from "../entities/Contact.entity";

export const validateContactId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { contactId, userId } = req.params;

  const foundContact: Contact | null = await contactRepository.findOne({
    relations: {
      user: true
    },
    where: {
      id: contactId,
      user: {
        id: userId
      }
    }
  });

  if (!foundContact) {
    throw new AppError("Contact not found", 404);
  }

  res.locals = { ...res.locals, foundContact: foundContact };

  return next();
};
