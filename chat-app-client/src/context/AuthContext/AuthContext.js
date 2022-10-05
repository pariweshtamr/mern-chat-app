import { useEffect, useReducer } from "react"
import { createContext } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  isFetching: false,
  err: false,
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        err: state.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
