import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./context/AuthContext/AuthContext"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/home/Home"

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/chats" element={user && <Chat />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default App
