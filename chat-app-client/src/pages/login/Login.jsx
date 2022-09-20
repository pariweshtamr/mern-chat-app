import React, { useState } from "react"
import { Container, useToast, Spinner } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContainer } from "./LoginStyles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BiShow, BiHide } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { userLogin } from "../../redux/User/UserAction"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("testPassword.7")

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast({
        status: "error",
        description: "Please enter your email and password.",
      })
      return
    }
    try {
      setLoading(true)
      dispatch(userLogin({ email, password })) && navigate("/chats")
      setLoading(false)
    } catch (error) {
      setError(true)
      toast({
        title: "Error",
        description: error.reponse.data.message,
        status: "error",
      })
      setLoading(false)
    }
  }

  return (
    <LoginContainer>
      <ToastContainer />
      <Container maxW="xl">
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Enter Your Email *"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              min="3"
            />
            <div className="passContainer">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter Your Password *"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="showHidePass" onClick={() => setShow(!show)}>
                {show ? <BiShow /> : <BiHide />}
              </div>
            </div>
          </div>

          {error && <span>Something went wrong!</span>}

          <button type="submit">{loading ? <Spinner /> : "Login"}</button>
          <span className="form-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </Container>
    </LoginContainer>
  )
}

export default Login
