import { Contact } from "../entities/Contact.entity";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/App.error";
import {
  TContact,
  TContactRequest,
  TContactUpdate,
  TContactsReponse,
} from "../interfaces/contacts.interfaces";
import { contactRepository, userRepository } from "../repositories";
import {
  contactSchema,
  contactsResponseSchema,
} from "../schemas/contacts.schemas";

export class ContactsService {
  async create(data: TContactRequest, user: User): Promise<TContact> {
    const contactExists = await userRepository.findOne({
      relations: {
        contacts: true,
      },
      where: {
        id: user.id,
        contacts: {
          telephone: data.telephone,
        },
      },
    });

    if (contactExists) throw new AppError("Contact already exists!", 409);

    const contact: Contact = contactRepository.create({
      ...data,
      user: user,
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
  }

  async listAll(userId: string): Promise<TContactsReponse> {
    const contacts = await contactRepository.find({
      relations: {
        user: true,
      },
      where: {
        user: { id: userId },
      },
    });

    return contactsResponseSchema.parse(contacts);
  }

  list(contact: TContact): TContact {
    return contactSchema.parse(contact);
  }

  async update(contact: TContact, data: TContactUpdate): Promise<TContact> {
    const updatedContact: TContact = await contactRepository.save({ ...contact, ...data });

    return contactSchema.parse(updatedContact);
  }

  async delete(contact: TContact): Promise<void> {
    await contactRepository.delete(contact.id);
  }
}
