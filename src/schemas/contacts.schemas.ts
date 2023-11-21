import { z } from "zod";
import { userSchema } from "./users.schemas";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().max(255),
  email: z.string().email().max(45),
  telephone: z.string().max(25),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish().optional(),
  user: userSchema,
});

const contactRequestSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  user: true,
});

const contactUpdateSchema = contactSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    user: true,
  })
  .partial();

const contactsResponseSchema = contactSchema.array();

export {
  contactSchema,
  contactRequestSchema,
  contactUpdateSchema,
  contactsResponseSchema,
};
