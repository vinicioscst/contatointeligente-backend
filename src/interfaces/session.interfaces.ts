import { z } from "zod";
import { sessionReturnSchema, sessionSchema } from "../schemas/session.schema";

type TSession = z.infer<typeof sessionSchema>;
type TSessionResponse = z.infer<typeof sessionReturnSchema>;

export { TSession, TSessionResponse };
