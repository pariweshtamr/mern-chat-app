import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, IconButton, Text } from "@chakra-ui/react"
import React from "react"
import { getSender, getSenderFull } from "../../config/ChatLogic"
import { ChatState } from "../../context/ChatContext"
import ProfileModal from "../ProfileModal/ProfileModal"
import UpdateGroupChatModal from "../UpdateGroupChatModal/UpdateGroupChatModal"

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState()
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
                <UpdateGroupChatModal
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </>
            )}
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            p={3}
            bg="#e8e8e8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            Messages here
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
