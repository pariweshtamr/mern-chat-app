import { ViewIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { renameGroupChat } from "../../api/chatApi"
import { ChatState } from "../../context/ChatContext"
import UserBadgeItem from "../UserAvatar/UserBadgeItem"

const UpdateGroupChatModal = ({ fetchAgain, setFetchAgain }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [groupChatName, setGroupChatName] = useState("")
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [renameLoading, setRenameLoading] = useState(false)
  const { selectedChat, setSelectedChat, user } = ChatState()
  const { token } = user
  const toast = useToast()

  const handleDelete = (userToDelete) => {}

  const handleRename = async () => {
    if (!groupChatName) {
      return
    }
    try {
      setRenameLoading(true)
      const data = await renameGroupChat(
        {
          chatId: selectedChat._id,
          chatName: groupChatName,
        },
        token
      )
      if (data._id) {
        setSelectedChat(data)
        setFetchAgain(!fetchAgain)
        setRenameLoading(false)
      }
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        position: "bottom",
      })
      setRenameLoading(false)
    }
    setGroupChatName("")
  }

  const handleSearch = () => {}

  const handleLeaveGroup = () => {}

  return (
    <>
      <IconButton
        display={{ base: "flex" }}
        icon={<ViewIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedChat.chatName.toUpperCase()}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%" display="flex" flexWrap="wrap" pb={3}>
              {selectedChat?.users.map((u) => (
                <UserBadgeItem
                  key={u._id}
                  user={u}
                  handleFunction={() => handleDelete(u)}
                />
              ))}
            </Box>

            <FormControl display="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                ml={1}
                isLoading={renameLoading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add users to the group"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => handleLeaveGroup(user)} colorScheme="red">
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateGroupChatModal
