import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chats: [],
  selectedChat: {},
  isLoading: false,
  error: null,
}

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    chatSuccess: (state, { payload }) => {
      const newChat = { ...payload }
      state.chats.push(newChat)
      state.isLoading = false
      state.selectedChat = payload
    },
    chatFail: (state, { payload }) => {
      state.error = payload
      state.isLoading = false
    },
    deleteChatSuccess: (state, { payload }) => {
      state.chats = payload
      state.isLoading = false
    },
    getChatsSuccess: (state, { payload }) => {
      const chats = { ...payload }
      state.isLoading = false
      state.chats.push(chats)
    },
  },
})

const { reducer, actions } = chatSlice

export const { requestPending, chatSuccess, getChatsSuccess } = actions

export default reducer
