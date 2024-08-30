import express from "express"
import { dataBase } from "./database/config/db"

require('dotenv').config()

console.log(dataBase)

const server = express()

export default server