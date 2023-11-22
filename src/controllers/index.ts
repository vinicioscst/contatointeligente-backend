import { ContactsService } from "../services/contacts.service";
import { SessionService } from "../services/session.service";
import { UsersService } from "../services/users.service";
import { ContactsController } from "./contacts.controller";
import { SessionController } from "./session.controller";
import { UsersController } from "./users.controller";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

const sessionService = new SessionService()
const sessionController = new SessionController(sessionService)

const contactService = new ContactsService()
const contactController = new ContactsController(contactService)

export { usersController, sessionController, contactController };
