import express from "express"
import { db } from "./database/config/db"
import RutaFaxes from "./routes/Faxes"

require('dotenv').config()

const server = express()

// Leer datos de formularios
server.use(express.json())

// Rutas
server.use("/api/faxes", RutaFaxes)

export default server