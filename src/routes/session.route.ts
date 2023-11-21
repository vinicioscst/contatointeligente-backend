import { Router } from "express"
import { sessionSchema } from "../schemas/session.schema"
import { sessionController } from "../controllers"
import { validateBody } from "../middlewares/validateBody.middleware"

const sessionRouter: Router = Router()

sessionRouter.post("", validateBody(sessionSchema), (req, res) => sessionController.login(req, res))

export { sessionRouter }
