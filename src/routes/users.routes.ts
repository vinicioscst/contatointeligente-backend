import { Router } from "express";
import { usersController } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
import { validateEmail } from "../middlewares/validateEmail.middleware";
import { validateUserId } from "../middlewares/validateUserId.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { validateUserPermission } from "../middlewares/validateUserPermission.middleware";
import { verifyDeletedUser } from "../middlewares/verifyDeletedUser.middleware";

const usersRouter: Router = Router()


usersRouter.post("", validateBody(userRequestSchema), validateEmail, (req, res) => usersController.create(req, res))
usersRouter.get("", (req, res) => usersController.listAll(req, res))
usersRouter.patch("/:userId/restore", validateToken, validateUserPermission, verifyDeletedUser, (req, res) => usersController.restore(req, res))

usersRouter.use("/:userId", validateToken, validateUserPermission, validateUserId)

usersRouter.get("/:userId", (req, res) => usersController.list(req, res))
usersRouter.patch("/:userId", (req, res) => usersController.update(req, res))
usersRouter.delete("/:userId", (req, res) => usersController.delete(req, res))

export { usersRouter }