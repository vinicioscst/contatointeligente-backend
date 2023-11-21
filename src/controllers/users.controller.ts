import { Request, Response } from "express"
import { UsersService } from "../services/users.service"

class UsersController {
    constructor(private usersService: UsersService) {}

    async create(req: Request, res: Response) {
        const newUser = await this.usersService.create(req.body)

        return res.status(201).json(newUser)
    }

    async list(req: Request, res: Response) {
        const { userId } = req.params
        const user = await this.usersService.list(userId)

        return res.status(200).json(user)
    }

    async listAll(req: Request, res: Response) {
        const users = await this.usersService.listAll()

        return res.status(200).json(users)
    }

    async update(req: Request, res: Response) {
        const { foundUser } = res.locals
        const updatedUser = await this.usersService.update(foundUser, req.body)

        return res.status(200).json(updatedUser)
    }

    async delete(req: Request, res: Response) {
        const { foundUser } = res.locals
        await this.usersService.delete(foundUser)

        return res.status(204).json()
    }
    
    async restore(req: Request, res: Response) {
        const { foundUser } = res.locals
        const restoredUser = await this.usersService.restore(foundUser)

        return res.status(200).json(restoredUser)
    }
}

export { UsersController }