import express from "express"
import { hashPassword } from "../helpers/bcrypt.helper.js"
import { registerUser } from "../models/user/User.model.js"

const authRouter = express.Router()

authRouter.all("/", (req, res, next) => {
  next()
})

//Register user

authRouter.post("/register", async (req, res, next) => {
  try {
    //encrypt password coming from client
    const hashPass = hashPassword(req.body.password)

    if (hashPass) {
      req.body.password = hashPass
      const user = await registerUser(req.body)

      return res.status(200).json({
        status: "success",
        message: "New user has been registered successfully.",
        user,
      })
    }
    res.status(500).json({
      status: "error",
      message: "Unable to create new user. Please try again later.",
    })
  } catch (error) {
    next(error)
  }
})

export default authRouter
