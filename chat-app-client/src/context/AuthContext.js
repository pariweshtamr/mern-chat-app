import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setCurrentUser(userInfo)

    if (!userInfo) {
      navigate("/")
    }
  }, [navigate])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
