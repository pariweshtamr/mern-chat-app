import Chats from "../chats/Chats"
import SearchBar from "../searchBar/SearchBar"
import SidebarNav from "../sidebarNav/SidebarNav"
import { SidebarContainer } from "./SidebarStyles"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarNav />
      <SearchBar />
      <Chats />
      <Chats />
      <Chats />
    </SidebarContainer>
  )
}

export default Sidebar
