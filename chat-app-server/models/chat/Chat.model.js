import Chat from "./Chat.schema.js"

export const getChat = (filter) => {
  try {
    const chat = Chat.find(filter)
    return chat
  } catch (error) {
    console.log(error)
  }
}

export const createChat = (chatData) => {
  try {
    const chat = Chat.create(chatData)
    return chat
  } catch (error) {
    console.log(error)
  }
}

export const findCreatedChat = (_id) => {
  try {
    const chat = Chat.findOne(_id)
    return chat
  } catch (error) {
    console.log(error)
  }
}
