import { AddIcon } from "@chakra-ui/icons"
import { Box, Button, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { fetchUserChats } from "../../api/chatApi"
import { getSender } from "../../config/ChatLogic"
import { ChatState } from "../../context/ChatContext"
import ChatLoading from "../ChatLoading/ChatLoading"
import GroupChatModal from "../GroupChatModal/GroupChatModal"
import { MyChatsStyles } from "./MyChatsStyles"

const MyChats = ({ fetchAgain }) => {
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState()
  const { token } = user
  const [loggedUser, setLoggedUser] = useState()

  const fetchChats = async () => {
    try {
      const data = await fetchUserChats(token)
      setChats(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
    fetchChats()
  }, [fetchAgain])

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDirection="column"
      p={3}
      bg="white"
      width={{ base: "100%", md: "28%" }}
      borderRadius="lg"
      borderWidth="1px"
      height="100%"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        p={3}
        bg="f8f8f8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                key={chat._id}
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="lg"
                bg={selectedChat === chat ? "#edf2f6" : ""}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  )
}

export default MyChats
