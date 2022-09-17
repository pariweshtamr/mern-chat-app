import { ChatsContainer } from "./ChatsStyles"
import user from "../../assets/user1.jpeg"

const Chats = () => {
  return (
    <ChatsContainer>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
    </ChatsContainer>
  )
}

export default Chats
