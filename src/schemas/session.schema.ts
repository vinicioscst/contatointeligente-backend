import { userSchema } from "./users.schemas";

const sessionSchema = userSchema.pick({
  email: true,
  password: true,
});

export { sessionSchema };
