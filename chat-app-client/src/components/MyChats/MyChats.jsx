import { Box, useToast } from "@chakra-ui/react"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { fetchUserChats } from "../../api/chatApi"
import { ChatState } from "../../context/ChatContext"
import { getUserChats } from "../../redux/Chat/ChatAction"
import { MyChatsStyles } from "./MyChatsStyles"

const MyChats = () => {
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState()
  const { token } = user
  const [loggedUser, setLoggedUser] = useState()
  const [currentChats, setCurrentChats] = useState()
  const toast = useToast()

  const fetchChats = async () => {
    try {
      const data = await fetchUserChats(token)
      setChats(data)
    } catch (error) {}
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
    fetchChats()
  }, [])

  return (
    <MyChatsStyles>
      <Box
        display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
        flexDirection="column"
        p={3}
        bg="black"
        w={{ base: "100%", md: "31%" }}
        borderRadius="lg"
        borderWidth="1px"
      ></Box>
    </MyChatsStyles>
  )
}

export default MyChats
