import { AppDataSource } from "./data-source";
import { Contact } from "./entities/Contact.entity";
import { User } from "./entities/User.entity";
import { TContactRepo } from "./interfaces/contacts.interfaces";
import { TUserRepo } from "./interfaces/users.interfaces";

const userRepository: TUserRepo = AppDataSource.getRepository(User);
const contactRepository: TContactRepo = AppDataSource.getRepository(Contact);

export { userRepository, contactRepository };
