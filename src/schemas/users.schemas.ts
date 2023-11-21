import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullName: z.string().max(255),
  email: z.string().email().max(45),
  password: z.string().max(120),
  isAdmin: z.boolean().default(false),
  avatar: z.string().nullish().optional(),
  telephone: z.string().max(25),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish().optional(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userUpdateSchema = userSchema
  .omit({
    id: true,
    isAdmin: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  })
  .partial();

const userResponseSchema = userSchema.omit({
  password: true,
});

const usersResponseSchema = userResponseSchema.array();


export {userSchema, userRequestSchema, userUpdateSchema, userResponseSchema, usersResponseSchema}