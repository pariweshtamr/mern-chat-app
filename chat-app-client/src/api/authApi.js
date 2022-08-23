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
    return error.data.response
  }
}
