import { Router } from "express"
import { validateBody } from "../middlewares/validateBody.middleware"
import { contactRequestSchema, contactUpdateSchema } from "../schemas/contacts.schemas"
import { validateToken } from "../middlewares/validateToken.middleware"
import { validateUserPermission } from "../middlewares/validateUserPermission.middleware"
import { validateUserId } from "../middlewares/validateUserId.middleware"
import { validateContactId } from "../middlewares/validateContactId.middleware"
import { contactController } from "../controllers"

const contactsRouter: Router = Router()

contactsRouter.use("/users/:userId/contacts/:contactId", validateToken, validateUserPermission, validateUserId, validateContactId)

contactsRouter.post("/users/:userId/contacts", validateBody(contactRequestSchema), (req, res) => contactController.create(req, res))
contactsRouter.get("/users/:userId/contacts", (req, res) => contactController.listAll(req, res))
contactsRouter.get("/users/:userId/contacts/:contactId", (req, res) => contactController.list(req, res))
contactsRouter.patch("/users/:userId/contacts/:contactId", validateBody(contactUpdateSchema), (req, res) => contactController.update(req, res))
contactsRouter.delete("/users/:userId/contacts/:contactId", (req, res) => contactController.delete(req, res))

export { contactsRouter }
