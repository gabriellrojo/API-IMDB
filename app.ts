import express, { Response, Request } from "express"
import config from "config"
import route from "./routes/routes"
require("dotenv").config()

const server = express()

server.use(express.json())
server.use("/", route)

const PORT = process.env.PORT

server.listen(PORT || 5000, () => {
    console.log(`Estou rodando na porta ${PORT}`)
})