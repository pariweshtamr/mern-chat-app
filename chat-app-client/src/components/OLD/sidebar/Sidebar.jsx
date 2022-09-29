import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserChats } from "../../redux/Chat/ChatAction"
import Chats from "../chats/Chats"
import SearchBar from "../searchBar/SearchBar"
import SidebarNav from "../sidebarNav/SidebarNav"
import { SidebarContainer } from "./SidebarStyles"

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.user)
  const { selectedChat, isLoading, chats } = useSelector((state) => state.chat)
  const [loggedUser, setLoggedUser] = useState()
  const [currentChats, setCurrentChats] = useState()
  const toast = useToast()
  const dispatch = useDispatch()
  const { token } = userInfo
  const { _id } = userInfo.user

  const fetchChats = async () => {
    const getChats = async () => {
      try {
        dispatch(getUserChats({ _id, token }))
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo.user")))
    fetchChats()
  }, [])

  console.log(loggedUser)

  return (
    <SidebarContainer>
      <SidebarNav />
      <SearchBar />
    </SidebarContainer>
  )
}

export default Sidebar
