import axios from "axios"
const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

const chatEp = rootUrl + "/chat"

export const createChat = async (obj) => {
  const { _id, userId, token } = obj
  try {
    const { data } = await axios.post(
      chatEp,
      { userId, _id },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return data
  } catch (error) {
    return error.response.data
  }
}

export const fetchUserChats = async (info) => {
  const { _id, token } = info

  try {
    const { data } = await axios.get(chatEp, _id, {
      headers: {
        Authorization: token,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    return error.response.data
  }
}
