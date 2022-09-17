import { Navbar } from "./SidebarNavStyles"

const SidebarNav = () => {
  return (
    <Navbar>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </Navbar>
  )
}

export default SidebarNav
