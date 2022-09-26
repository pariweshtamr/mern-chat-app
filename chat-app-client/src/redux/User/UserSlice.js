import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  isLoggedIn: false,
  isLoading: false,
  autoLoginLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    registerSuccess: (state, { payload }) => {
      state.userInfo = payload || {}
      state.isLoggedIn = true
      state.isLoading = false
      state.error = null

      localStorage.setItem("userInfo", JSON.stringify(payload))
    },
    loginSuccess: (state, { payload }) => {
      state.userInfo = payload || {}
      state.isLoggedIn = true
      state.isLoading = false
      state.error = null

      localStorage.setItem("userInfo", JSON.stringify(payload))
    },
    loginFail: (state, { payload }) => {
      state.userInfo = {}
      state.isLoading = false
      state.error = payload || {}
    },
    logoutSuccess: (state) => {
      state.userInfo = {}
      state.isLoading = false
      state.error = false

      localStorage.clear()
    },
    autoLoginPending: (state, { payload }) => {
      state.autoLoginLoading = payload
    },
    loginAuto: (state) => {
      state.autoLoginLoading = false
      state.isLoggedIn = true
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  loginFail,
  loginAuto,
  autoLoginPending,
} = actions

export default reducer
