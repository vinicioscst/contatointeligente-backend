import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRouter } from "./routes/users.routes"
import { handleErrors } from "./middlewares/handleErrors"

const app = express()

app.use(express.json())
app.use("/users", usersRouter)


app.use(handleErrors)

export default app