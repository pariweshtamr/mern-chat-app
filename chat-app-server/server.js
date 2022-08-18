import dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import cors from "cors"

const PORT = process.env.PORT || 8000

// Connect mongoDB
import mongoClient from "./config/db.js"

mongoClient()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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
