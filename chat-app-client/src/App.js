import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Chat from "./pages/chat/Chat"
import { useSelector } from "react-redux"

function App() {
  const { user, isLoggedIn } = useSelector((state) => state.user)

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route path="/" element={!isLoggedIn ? <Login /> : <Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
