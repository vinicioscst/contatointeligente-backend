import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullName: z.string().max(255),
  email: z.string().email().max(45),
  avatar: z.string().nullish().optional(),
  password: z.string().max(120),
  telephone: z.number(),
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