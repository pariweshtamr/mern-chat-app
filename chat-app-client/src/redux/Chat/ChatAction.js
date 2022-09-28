import { createChat, fetchUserChats } from "../../api/chatApi"
import { chatSuccess, getChatsSuccess, requestPending } from "./ChatSlice"

export const createOneToOneChat = (chatInfo) => async (dispatch) => {
  dispatch(requestPending())

  // call api to create chat
  const data = await createChat(chatInfo)
  if (data?._id) {
    return dispatch(chatSuccess(data))
  }
}

export const getUserChats = (token) => async (dispatch) => {
  dispatch(requestPending())

  //call api to get user chats
  const data = await fetchUserChats(token)
  if (data) {
    return dispatch(getChatsSuccess(data))
  }
}
