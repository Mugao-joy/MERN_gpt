import { Router } from "express";

const appRouter = Router()

appRouter.use("/user,userRoutes")
appRouter.use("/chats,chatRoutes")

export default appRouter