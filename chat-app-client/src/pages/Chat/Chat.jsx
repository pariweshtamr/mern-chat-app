import { useEffect } from "react"
import { ChatStyles } from "./chatStyles"
import { useSelector } from "react-redux"
import { Box } from "@chakra-ui/layout"
import MyChats from "../../components/MyChats/MyChats"
import ChatBox from "../../components/ChatBox/ChatBox"

const Chat = () => {
  const { user } = useSelector((state) => state.user)

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
