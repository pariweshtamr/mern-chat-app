import express from "express"
import { protect } from "../middlewares/auth.middleware.js"
import {
  createChat,
  findCreatedChat,
  getChat,
} from "../models/chat/Chat.model.js"
import { populateSenderInfo } from "../models/message/Message.model.js"

const chatRouter = express.Router()

//create chat one-to-one chat
chatRouter.post("/", protect, async (req, res, next) => {
  const { userId } = req.body
  try {
    if (!userId) {
      console.log("Foreign UserId not sent with request")
      return
    }
    // since we are creating a one-to-one chat, we are first finding chats that are one-to-one so isGroupChat is false
    // next we will find the chat consisting of the logged in user and the foreign user using $and (mongodb operator)
    var isChat = await getChat({
      isGroupChat: false,
      // $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.
      // here both expressions have to be true
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],

      // The $elemMatch Operator of the MongoDB is used to find documents with at least one array field. The finding operation matches the data in the array field with the criteria mentioned with the $elemMatch. $elemMatch is an operator by MongoDB that is used to match elements in an array.
    })
      .populate("users", "-password")
      .populate("latestMessage")

    isChat = await populateSenderInfo(isChat, {
      path: "latestMessage.sender",
      select: "displayName email avatarImage ",
    })

    if (isChat?.length > 0) {
      res.json(isChat[0])
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
      }

      try {
        const createdChat = await createChat(chatData)
        const fullChat = await findCreatedChat({
          _id: createdChat._id,
        }).populate("users", "-password")

        res.status(200).json(fullChat)
      } catch (error) {
        res.status(400).json(error.message)
      }
    }
  } catch (error) {
    next(error)
  }
})

chatRouter.get("/", protect, async (req, res, next) => {})
chatRouter.post("/group", protect, async (req, res, next) => {})
chatRouter.put("/group", protect, async (req, res, next) => {})

export default chatRouter
