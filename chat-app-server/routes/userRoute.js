import express from "express"
import { getByIdAndUpdate } from "../models/user/User.model.js"

const userRouter = express.Router()

userRouter.patch("/:id", async (req, res, next) => {
  try {
    console.log(req.body)
    const { _id } = req.params
    console.log(_id)
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
