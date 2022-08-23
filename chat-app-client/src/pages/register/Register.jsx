import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Col, Container, Row, Toast } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { FormContainer } from "./registerStyles"
import logo from "../../assets/logo.png"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { userRegister } from "../../redux/User/UserAction"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { isLoading, response } = useSelector((state) => state.user)

  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      toast.error("Please enter all the required fields.")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirm password must be same", toastOptions)
    } else if (username.length < 3) {
      toast.error("Username must be longer than 3 characters", toastOptions)
    } else if (password.length < 8) {
      toast.error(
        "Password must be at least 8 characters or longer",
        toastOptions
      )
      return
    }

    dispatch(userRegister({ username, password, email }))

    setTimeout(() => {
      navigate("/")
    }, 4000)
  }
  return (
    <FormContainer>
      <ToastContainer />
      <Container>
        <Row>
          <Col md={5} sm={12}>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div className="brand">
                <img src={logo} alt="" />
                <h1>
                  Chat <span>App</span>
                </h1>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <button type="submit">Sign Up</button>
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </form>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  )
}

export default Register