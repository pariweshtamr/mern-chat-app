import { useContext, useEffect, useState } from "react"
import { ChatStyles } from "./chatStyles"
import MyChats from "../../components/MyChats/MyChats"
import ChatBox from "../../components/ChatBox/ChatBox"

import { ChatState } from "../../context/ChatContext"
import SideDrawer from "../../components/SideDrawer/SideDrawer"

const Chat = () => {
  const { user } = ChatState()
  return (
    <ChatStyles>
      {user && <SideDrawer />}
      <div className="chatContainer">
        {user && <MyChats />}
        <ChatBox />
      </div>
    </ChatStyles>
  )
}

export default Chat
