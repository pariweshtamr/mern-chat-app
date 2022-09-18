import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./redux/User/UserSlice"
import chatReducer from "./redux/Chat/ChatSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
})

export default store
