import { MessageContainer } from "./MessageStyles"
import user from "../../assets/user2.jpeg"

const Message = () => {
  return (
    <MessageContainer>
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        {/* <img src={user} alt="" /> */}
      </div>
    </MessageContainer>
  )
}

export default Message
