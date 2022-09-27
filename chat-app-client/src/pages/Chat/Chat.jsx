import { useEffect, useState } from "react"
import { ChatStyles } from "./chatStyles"
import { useDispatch, useSelector } from "react-redux"
import MyChats from "../../components/MyChats/MyChats"
import ChatBox from "../../components/ChatBox/ChatBox"
import { useToast } from "@chakra-ui/react"
import { fetchUserChats } from "../../api/chatApi"
import { getUserChats } from "../../redux/Chat/ChatAction"

const Chat = () => {
  const { userInfo } = useSelector((state) => state.user)
  const { selectedChat, isLoading, chats } = useSelector((state) => state.chat)
  const [loggedUser, setLoggedUser] = useState()
  const [currentChats, setCurrentChats] = useState()
  const toast = useToast()
  const dispatch = useDispatch()
  const { token } = userInfo
  const { _id } = userInfo.user

  useEffect(() => {
    const fetchChats = async () => {
      const getChats = async () => {
        try {
          dispatch(getUserChats({ _id, token }))
        } catch (error) {
          console.log(error)
        }
      }
      getChats()
    }
    return () => {
      fetchChats()
    }
  }, [dispatch, _id, token])

  return (
    <ChatStyles>
      <div className="chatContainer">
        <MyChats />
        <ChatBox />
      </div>
    </ChatStyles>
  )
}

export default Chat
