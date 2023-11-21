import {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdate,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import { userRepository } from "../repositories";
import { userResponseSchema, usersResponseSchema } from "../schemas/users.schemas";

export class UsersService {
  async create(data: TUserRequest): Promise<TUserResponse> {
    const user: TUser = userRepository.create(data);
    await userRepository.save(user);

    return userResponseSchema.parse(user);
  }

  async list(userId: string): Promise<TUserResponse> {
    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        contacts: true,
      },
    });

    return userResponseSchema.parse(user);
  }

  async listAll(): Promise<TUsersResponse> {
    const users = await userRepository.find();

    return usersResponseSchema.parse(users);
  }

  async update(user: TUser, data: TUserUpdate): Promise<TUserResponse> {
    const updatedUser: TUser = await userRepository.save({ ...user, ...data });

    return userResponseSchema.parse(updatedUser);
  }

  async delete(user: TUser): Promise<void> {
    await userRepository.softRemove(user);
  }

  async restore(user: TUser): Promise<TUserResponse> {
    await userRepository.restore(user.id);
    
    const restoredUser = await userRepository.findOne({
      where: {
        id: user.id,
      },
      relations: {
        contacts: true,
      },
    });

    return userResponseSchema.parse(restoredUser);
  }
}
