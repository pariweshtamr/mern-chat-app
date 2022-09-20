import mongoose from "mongoose"
const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

const Message = mongoose.model("Message", MessageSchema)
export default Message
