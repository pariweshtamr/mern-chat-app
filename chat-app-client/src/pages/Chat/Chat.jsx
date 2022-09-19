import { useEffect } from "react"
import { ChatStyles } from "./chatStyles"
import axios from "axios"
import { useState } from "react"

const Chat = () => {
  const [chats, setChats] = useState()
  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get("/api/chat")
      setChats(data)
    }

    return () => {
      fetchChats()
    }
  }, [])

  return (
    <ChatStyles>
      {chats && chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
    </ChatStyles>
  )
}

export default Chat
