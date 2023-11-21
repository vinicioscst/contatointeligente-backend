import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controller";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

export { usersController };
