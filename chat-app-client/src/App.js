import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/home/Home"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

function App() {
  const { userInfo } = useSelector((state) => state.user)
  const [loggedInUser, setLoggedInUser] = useState()
  useEffect(() => {
    if (userInfo) {
      const currentUser = JSON.parse(localStorage.getItem("user"))
      if (currentUser === userInfo) {
        setLoggedInUser(currentUser)
      }
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/chats" element={<Chat />}></Route>
        <Route path="/" element={!loggedInUser ? <Home /> : <Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
