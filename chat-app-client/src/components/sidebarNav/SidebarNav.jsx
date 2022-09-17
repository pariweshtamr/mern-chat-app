import { Navbar } from "./SidebarNavStyles"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { useSelector } from "react-redux"

const SidebarNav = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Navbar>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={user.photoUrl} alt="" />
        <span>{user.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </Navbar>
  )
}

export default SidebarNav
