import Message from "./Message.schema.js"

// Populate sender user info to message model
export const populateSenderInfo = (isChat, filter) => {
  try {
    const sender = Message.populate(isChat, filter)
    return sender
  } catch (error) {
    console.log(error)
  }
}
