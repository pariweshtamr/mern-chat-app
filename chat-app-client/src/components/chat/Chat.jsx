import { useContext } from "react"
import { ChatContext } from "../../context/ChatContext"
import InputPanel from "../inputPanel/InputPanel"
import Messages from "../messages/Messages"
import { ChatContainer } from "./ChatStyles"

const Chat = () => {
  const { data } = useContext(ChatContext)
  return (
    <ChatContainer>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <Messages />
      <InputPanel />
    </ChatContainer>
  )
}

export default Chat
