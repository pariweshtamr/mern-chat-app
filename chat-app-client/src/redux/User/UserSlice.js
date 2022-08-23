import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  response: {},
  error: {},
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    registerSuccess: (state, { payload }) => {
      state.isLoading = false
      state.user = payload || {}
      state.isLoggedIn = true
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false
      state.error = payload || {}
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false
      state.user = payload || {}
      state.isLoggedIn = true
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload || {}
    },
    logoutSuccess: (state, { payload }) => {
      state.user = {}
      state.isLoggedIn = false
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  requestFail,
  registerSuccess,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} = actions

export default reducer
