import express from "express"
import { comparePassword, hashPassword } from "../helpers/bcrypt.helper.js"
import { getUserByUsername, registerUser } from "../models/user/User.model.js"
import { createError } from "../utils/error.js"

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

//login User
authRouter.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body

    const user = await getUserByUsername(username)
    if (user._id) {
      //compare password
      const comparePass = comparePassword(password, user.password)
      if (comparePass) {
        user.password = undefined

        return res.json({
          status: "success",
          message: "Login successful",
          user,
        })
      } else {
        next(createError(400, "Wrong username or password!"))
        res.status(400).json({
          status: "error",
          message: "Wrong username or password!",
        })
      }
    }
    return next(createError(404, "User not found!"))
  } catch (error) {
    next(error)
  }
})

export default authRouter
