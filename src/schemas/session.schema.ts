import { userSchema } from "./user.schemas";

const sessionsSchema = userSchema.pick({
  email: true,
  password: true,
});

export { sessionsSchema };
