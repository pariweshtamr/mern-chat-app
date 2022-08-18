import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Chat from "./pages/chat/Chat"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
