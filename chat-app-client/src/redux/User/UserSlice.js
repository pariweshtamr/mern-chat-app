import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload || {}
    },

    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
})

const { reducer, actions } = userSlice

export const { login, logout } = actions

export default reducer
