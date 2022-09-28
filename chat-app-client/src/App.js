import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/home/Home"

function App() {
  return (
    <Routes>
      <Route path="/chats" element={<Chat />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default App
