import InputPanel from "../inputPanel/InputPanel"
import Messages from "../messages/Messages"
import { ChatContainer } from "./ChatStyles"

const Chat = () => {
  return (
    <ChatContainer>
      <div className="chatInfo">
        <span>Jane</span>
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
