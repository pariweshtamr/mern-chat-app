import React, { useState } from "react"
import { Spinner } from "react-bootstrap"
import { Container } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContainer } from "./LoginStyles"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BiShow, BiHide } from "react-icons/bi"

const Login = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("testPassword.7")

  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error("Please enter all the required fields.", toastOptions)
      return
    }
    try {
      setLoading(true)
      setLoading(false)
      navigate("/")
    } catch (error) {
      setError(true)
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
              placeholder="Email *"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              min="3"
            />
            <div className="passContainer">
              <input
                type={show ? "text" : "password"}
                placeholder="Password *"
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

          <button type="submit">
            {loading ? (
              <Spinner animation="grow" variant="light" className="spinner" />
            ) : (
              "Login"
            )}
          </button>
          <span className="form-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </Container>
    </LoginContainer>
  )
}

export default Login
