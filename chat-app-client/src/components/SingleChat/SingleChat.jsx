import { ChatState } from "../../context/ChatContext"
import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box,
  FormControl,
  IconButton,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { fetchChatMessages, sendNewMessage } from "../../api/messageApi"
import { getSender, getSenderFull } from "../../config/ChatLogic"
import ProfileModal from "../ProfileModal/ProfileModal"
import ScrollableChat from "../ScrollableChat/ScrollableChat"
import UpdateGroupChatModal from "../UpdateGroupChatModal/UpdateGroupChatModal"
import { io } from "socket.io-client"
import { useRef } from "react"

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ENDPOINT_URL
    : "http://localhost:8000"

const SingleChat = () => {
  const { user, selectedChat, setSelectedChat } = ChatState()
  const [loggedUser, setLoggedUser] = useState()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState()
  const toast = useToast()
  const socket = useRef()

  const fetchMessages = async () => {
    if (!selectedChat) return
    try {
      setLoading(true)
      const data = await fetchChatMessages(selectedChat._id, loggedUser.token)
      setMessages(data)
      setLoading(false)
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to load Messages",
        status: "error",
        duration: 3000,
        position: "bottom",
      })
    }
  }

  const sendMessage = async (e) => {
    if (e.key === "Enter" && newMessage) {
      try {
        setNewMessage("")
        const data = await sendNewMessage(
          { chatId: selectedChat._id, message: newMessage },
          loggedUser.token
        )

        setMessages([...messages, data])
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send message!",
          status: "error",
          duration: 3000,
          position: "bottom",
        })
      }
    }
  }

  const typingHandler = (e) => {
    setNewMessage(e.target.value)
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
    fetchMessages()
  }, [selectedChat])

  useEffect(() => {
    socket.current = io(ENDPOINT)
  }, [])

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />

            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal fetchMessages={fetchMessages} />
              </>
            )}
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            p={3}
            bg="transparent"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat messages={messages} />
              </div>
            )}
            <FormControl onKeyDown={sendMessage} isRequired mt={3}>
              <Input
                placeholder="Enter a message..."
                variant="filled"
                bg="transparent"
                border="1px"
                borderColor="#2679bc"
                onChange={typingHandler}
                value={newMessage}
              />
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3}>
            Click on a user to start chatting...
          </Text>
        </Box>
      )}
    </>
  )
}

export default SingleChat
