import { useContext, useEffect, useState } from "react"
import { ChatStyles } from "./chatStyles"
import MyChats from "../../components/MyChats/MyChats"
import ChatBox from "../../components/ChatBox/ChatBox"

import { ChatState } from "../../context/ChatContext"
import SideDrawer from "../../components/SideDrawer/SideDrawer"
import { AuthContext } from "../../context/AuthContext/AuthContext"

const Chat = () => {
  return (
    <ChatStyles>
      <SideDrawer />
      <div className="chatContainer">
        <MyChats />
        <ChatBox />
      </div>
    </ChatStyles>
  )
}

export default Chat
