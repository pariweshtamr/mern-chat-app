import Chat from "./Chat.schema.js"

export const getChat = (filter) => {
  try {
    const chat = Chat.find(filter)
  } catch (error) {
    console.log(error)
  }
}
