import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext/AuthContext"

const PrivateRoute = ({ children }) => {
  let location = useLocation()
  const { isLoggedIn } = useContext(AuthContext)

  return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} />
}

export default PrivateRoute
