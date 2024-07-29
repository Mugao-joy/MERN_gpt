import express from "express";
import { config } from "dotenv";
import morgan from 'morgan' //gives log description of what type of request was made, response and status code
import appRouter from "./routes/index.js";
config()

const app = express()

//middlewares
//remove it in production
app.use(morgan("dev"))

app.use("api/v1", appRouter)

export default app