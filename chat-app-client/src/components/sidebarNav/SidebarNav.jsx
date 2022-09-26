import { Navbar } from "./SidebarNavStyles"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react"
import ProfileModal from "../ProfileModal/ProfileModal"
import { userLogout } from "../../redux/User/UserAction"

const SidebarNav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.user)

  const { user } = userInfo

  const logoutHandler = () => {
    dispatch(userLogout()) && navigate("/")
  }

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
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Navbar>
  )
}

export default SidebarNav
