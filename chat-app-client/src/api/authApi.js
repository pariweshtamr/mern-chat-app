import axios from "axios"
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

const authEp = rootUrl + "/auth"

export const registerUser = async (newUser) => {
  try {
    const { data } = await axios.post(authEp + "/register", newUser)
    return data
  } catch (error) {
    return error.response.data
  }
}

export const loginUser = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" })
  try {
    const { data } = await axios.post(authEp + "/login", userCredentials)
    if (data.status === "success") {
      dispatch({ type: "LOGIN_SUCCESS", payload: data })
      return {
        status: "success",
      }
    }
  } catch (err) {
    return {
      status: "error",
      message: "Invalid login details",
    }
  }
}

export const logoutUser = async (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: "LOGOUT_SUCCESS", payload: {} })
}
