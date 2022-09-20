import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/home/Home"
import { useSelector } from "react-redux"

function App() {
  const { user } = useSelector((state) => state.user)

  return (
    <Router>
      <Routes>
        <Route path="/chats" element={<Chat />}></Route>
        <Route path="/" element={user ? <Home /> : <Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
