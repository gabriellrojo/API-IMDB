import express, { Response, Request } from "express"
import route from "./routes/routes"
import config from "config"
require("dotenv").config()

const server = express()

server.use(express.json())
server.use("/", route)

const PORT = config.get<number>("port")

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`)
})