import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().max(255),
  email: z.string().email().max(45),
  telephone: z.string().max(25),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish().optional()
});

const contactRequestSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const contactUpdateSchema = contactSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  })
  .partial();

const contactsResponseSchema = contactSchema.array();

export {
  contactSchema,
  contactRequestSchema,
  contactUpdateSchema,
  contactsResponseSchema,
};
