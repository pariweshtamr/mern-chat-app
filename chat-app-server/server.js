import dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import cors from "cors"
import { chats } from "./data/data.js"

const PORT = process.env.PORT || 8001

// Connect mongoDB
import mongoClient from "./config/db.js"

mongoClient()

app.get("/api/chat", (req, res) => {
  res.send(chats)
})
app.get("/api/chat/:_id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params._id)
  res.send(singleChat)
})

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//Import Routes
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRoute.js"
import chatRouter from "./routes/chatRoute.js"
import messageRouter from "./routes/messageRoute.js"

//Use routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/chat", chatRouter)
app.use("/api/v1/message", messageRouter)

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500
  const errorMessage = error.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  })
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log(`Backend server is running at ${PORT}`)
})
