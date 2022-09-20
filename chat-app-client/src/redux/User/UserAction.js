import { loginUser } from "../../api/authApi"
import { loginSuccess, requestPending } from "./UserSlice"

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending)

  // call api to login
  const data = await loginUser(loginInfo)
  if (data?.status === "success") {
    return dispatch(loginSuccess(data.user))
  }
}
