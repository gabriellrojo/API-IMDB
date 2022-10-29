import express, { Response, Request } from "express"
import config from "config"
import route from "./routes/routes"
require("dotenv").config()

const server = express()

server.use(express.json())
server.use("/", route)

const PORT = config.get<number>("port")

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`)
})