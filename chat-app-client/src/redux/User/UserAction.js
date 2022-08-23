import { toast } from "react-toastify"
import { loginUser, registerUser } from "../../api/authApi"
import {
  loginFailure,
  loginSuccess,
  registerSuccess,
  requestFail,
  requestPending,
} from "./UserSlice"

export const userRegister = (newUser) => async (dispatch) => {
  dispatch(requestPending())
  //call api
  const data = await registerUser(newUser)
  data?.status === "success"
    ? dispatch(registerSuccess(data)) &&
      toast.success(data.message + " Logging in now...") &&
      localStorage.setItem("chat-app-user", JSON.stringify(data.user))
    : dispatch(requestFail(data)) && toast.error(data.message)
}

export const userLogin = (user) => async (dispatch) => {
  dispatch(requestPending())
  //call api
  const data = await loginUser(user)
  data?.status === "success"
    ? dispatch(loginSuccess(data.user))
    : dispatch(loginFailure(data)) && toast.error(data.message)
}
