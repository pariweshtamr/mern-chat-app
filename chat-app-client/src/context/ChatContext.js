import { useState } from "react"
import { useEffect } from "react"
import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [selectedChat, setSelectedChat] = useState()
  const navigate = useNavigate()
  const [chats, setChats] = useState([])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setUser(userInfo)

    if (!userInfo) navigate("/")
  }, [navigate])
  return (
    <ChatContext.Provider
      value={{ user, setUser, chats, setChats, selectedChat, setSelectedChat }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const ChatState = () => {
  return useContext(ChatContext)
}
