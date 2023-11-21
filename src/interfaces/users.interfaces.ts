import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  usersResponseSchema,
} from "../schemas/users.schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities/User.entity";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserUpdate = DeepPartial<User>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUsersResponse = z.infer<typeof usersResponseSchema>;
type TUserRepo = Repository<User>;

export {
  TUser,
  TUserRequest,
  TUserUpdate,
  TUserResponse,
  TUsersResponse,
  TUserRepo,
};
