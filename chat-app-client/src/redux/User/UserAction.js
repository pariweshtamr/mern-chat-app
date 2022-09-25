import { loginUser, registerUser } from "../../api/authApi"
import {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  requestPending,
} from "./UserSlice"

export const userRegister = (registerInfo) => async (dispatch) => {
  dispatch(requestPending())

  // call api to register
  const data = await registerUser(registerInfo)
  if (data?.status === "success") {
    return dispatch(registerSuccess(data.user))
  }
}

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending())

  // call api to login
  const data = await loginUser(loginInfo)
  if (data?.status === "success") {
    return dispatch(loginSuccess(data.user))
  }
}

export const userLogout = () => async (dispatch) => {
  dispatch(requestPending)

  localStorage.removeItem("user")

  dispatch(logoutSuccess())
}
