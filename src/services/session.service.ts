import { compare } from "bcryptjs";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/App.error";
import { TSession, TSessionResponse } from "../interfaces/session.interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";
import { userResponseSchema } from "../schemas/users.schemas";
import { sessionReturnSchema } from "../schemas/session.schema";

export class SessionService {
  async login(data: TSession): Promise<TSessionResponse> {
    const { email, password } = data;

    const foundUser: User | null = await userRepository.findOneBy({ email });
    if (!foundUser) {
      throw new AppError("Invalid credentials", 401);
    }

    const comparePassword: boolean = await compare(
      password,
      foundUser.password
    );
    if (!comparePassword) {
      throw new AppError("Invalid credentials", 401);
    }

    const token: string = sign(
      { email: foundUser.email, isAdmin: foundUser.isAdmin },
      process.env.SECRET_KEY!,
      { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    const user = userResponseSchema.parse(foundUser)

    const loginInfo = {
      user,
      token
    }

    return sessionReturnSchema.parse(loginInfo);
  }
}
