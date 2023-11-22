import { Request, Response } from "express"
import { ContactsService } from "../services/contacts.service"

class ContactsController {
    constructor(private contactsService: ContactsService) {}

    async create(req: Request, res: Response) {
        const {foundUser} = res.locals

        const newContact = await this.contactsService.create(req.body, foundUser)

        return res.status(201).json(newContact)
    }

    async listAll(req: Request, res: Response) {
        const { userId } = req.params

        const allContacts = await this.contactsService.listAll(userId)

        return res.status(200).json(allContacts)
    }

    list(req: Request, res: Response) {
        const {foundContact} = res.locals

        const contact = this.contactsService.list(foundContact)

        return res.status(200).json(contact)
    }

    async update(req: Request, res: Response) {
        const { foundContact } = res.locals
        const updatedContact = await this.contactsService.update(foundContact, req.body)

        return res.status(200).json(updatedContact)
    }

    async delete(req: Request, res: Response) {
        const { foundContact } = res.locals
        await this.contactsService.delete(foundContact)

        return res.status(204).json()
    }
}

export { ContactsController }