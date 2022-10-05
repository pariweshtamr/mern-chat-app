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
    dispatch({ type: "LOGIN_SUCCESS", payload: data })
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err })
  }
}
