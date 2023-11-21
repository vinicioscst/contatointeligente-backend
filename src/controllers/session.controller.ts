import { Request, Response } from "express"
import { SessionService } from "../services/session.service"

class SessionController {
    constructor(private sessionService: SessionService) {}

    async login(req: Request, res: Response) {
        const token = await this.sessionService.login(req.body)

        return res.status(200).json(token)
    }
}

export { SessionController }