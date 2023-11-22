import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRouter } from "./routes/users.routes"
import { handleErrors } from "./middlewares/handleErrors"
import { sessionRouter } from "./routes/session.route"
import { contactsRouter } from "./routes/contacts.routes"

const app = express()

app.use(express.json())
app.use("/users", usersRouter)
app.use("/login", sessionRouter)
app.use("", contactsRouter)


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-config.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(handleErrors)

export default app