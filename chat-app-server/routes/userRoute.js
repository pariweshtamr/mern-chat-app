import express, { request } from "express"
import { getAllUsers, getByIdAndUpdate } from "../models/user/User.model.js"

const userRouter = express.Router()

userRouter.get("/all/:_id", async (req, res, next) => {
  try {
    // get all other users from db expect for your own data (here: _id in params is your id)
    const users = await getAllUsers({ _id: { $ne: req.params._id } }).select([
      "email",
      "username",
      "avatarImage",
      " _id",
    ])
    return res.status(200).json({ status: "success", users })
  } catch (error) {
    next(error)
  }
})

userRouter.patch("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params
    const avatarImage = req.body.image
    const userData = await getByIdAndUpdate(_id, {
      isAvatarImageSet: true,
      avatarImage,
    })
    return res.status(200).json({
      status: "success",
      message: "User avatar has been set.",
      image: userData?.avatarImage,
    })
  } catch (error) {
    next(error)
  }
})

export default userRouter
