import { Navbar } from "./SidebarNavStyles"
import { useSelector } from "react-redux"
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar,
} from "@chakra-ui/react"
import ProfileModal from "../ProfileModal/ProfileModal"

const SidebarNav = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Navbar>
      <span className="logo">Chat App</span>
      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar
              size="sm"
              cursor="pointer"
              name={user.displayName}
              src={user.avatarImage}
            />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Navbar>
  )
}

export default SidebarNav
