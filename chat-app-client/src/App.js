import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/home/Home"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    setUser(currentUser)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/chats" element={<Chat />}></Route>
        <Route path="/" element={!user ? <Home /> : <Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
