import { AppDataSource } from "./data-source";
import { Contact } from "./entities/Contact.entity";
import { User } from "./entities/User.entity";
import { TUserRepo } from "./interfaces/user.interfaces";

const userRepo: TUserRepo = AppDataSource.getRepository(User);
const contactRepo = AppDataSource.getRepository(Contact);

export { userRepo, contactRepo };
