import { SessionService } from "../services/session.service";
import { UsersService } from "../services/users.service";
import { SessionController } from "./session.controller";
import { UsersController } from "./users.controller";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

const sessionService = new SessionService()
const sessionController = new SessionController(sessionService)

export { usersController, sessionController };
