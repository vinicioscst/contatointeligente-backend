import { Router } from "express";
import { usersController } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
import { validateEmail } from "../middlewares/validateEmail.middleware";
import { validateUserId } from "../middlewares/validateUserId.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { validateUserPermission } from "../middlewares/validateUserPermission.middleware";

const usersRouter: Router = Router()

usersRouter.use("/:id", validateToken, validateUserPermission, validateUserId)

usersRouter.post("", validateBody(userRequestSchema), validateEmail, (req, res) => usersController.create(req, res))
usersRouter.get("", (req, res) => usersController.listAll(req, res))
usersRouter.get("/:id", (req, res) => usersController.list(req, res))
usersRouter.patch("/:id", (req, res) => usersController.update(req, res))
usersRouter.delete("/:id", (req, res) => usersController.delete(req, res))

export { usersRouter }