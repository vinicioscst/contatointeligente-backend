import { z } from "zod";
import {
  contactRequestSchema,
  contactSchema,
  contactsResponseSchema,
} from "../schemas/contacts.schemas";
import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities/Contact.entity";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactRequestSchema>;
type TContactUpdate = DeepPartial<Contact>;
type TContactRepo = Repository<Contact>;
type TContactsReponse = z.infer<typeof contactsResponseSchema>;

export {
  TContact,
  TContactRequest,
  TContactUpdate,
  TContactRepo,
  TContactsReponse
};
