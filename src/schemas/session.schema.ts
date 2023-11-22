import { z } from "zod";
import { userResponseSchema, userSchema } from "./users.schemas";

const sessionSchema = userSchema.pick({
  email: true,
  password: true,
});

const sessionReturnSchema = z.object({
  user: userResponseSchema,
  token: z.string(),
})

export { sessionSchema, sessionReturnSchema };
