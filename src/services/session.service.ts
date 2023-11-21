import { compare } from "bcryptjs";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/App.error";
import { TSession, TSessionReturn } from "../interfaces/session.interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";

export class SessionService {
  async login(data: TSession): Promise<TSessionReturn> {
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

    return { token };
  }
}
