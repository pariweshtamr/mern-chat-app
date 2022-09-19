import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Chat from "./pages/Chat/Chat"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
