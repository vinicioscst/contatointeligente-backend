import { z } from "zod";
import { sessionSchema } from "../schemas/session.schema";

type TSession = z.infer<typeof sessionSchema>;
type TSessionReturn = { token: string };

export { TSession, TSessionReturn };
