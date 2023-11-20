import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullName: z.string().max(255),
  email: z.string().email().max(45),
  avatar: z.string().nullish().optional(),
  password: z.string().max(120),
  telephone: z.number(),
  createdAt: z.string(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userUpdateSchema = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();

const userResponseSchema = userSchema.omit({
  password: true,
});

const usersResponseSchema = userResponseSchema.array();


export {userSchema, userCreateSchema, userUpdateSchema, userResponseSchema, usersResponseSchema}