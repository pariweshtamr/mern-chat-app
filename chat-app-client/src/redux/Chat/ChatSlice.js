import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chatId: null,
  chatUser: {},
}

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    changeUser: (state, { payload }) => {
      state.chatUser = payload
      //   state.chatId =
      //     reduxStore.userSlice.user.uid > payload.uid
      //       ? reduxStore.userSlice.user.uid + payload.uid
      //       : payload.uid + reduxStore.userSlice.user.uid
    },
  },
})

const { reducer, actions } = chatSlice

export const { changeUser } = actions

export default reducer
