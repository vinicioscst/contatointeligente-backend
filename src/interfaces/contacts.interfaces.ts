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
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactsResponseSchema>;
type TContactRepo = Repository<Contact>;

export {
  TContact,
  TContactRequest,
  TContactUpdate,
  TContactResponse,
  TContactsResponse,
  TContactRepo,
};
