import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Col, Container, Row, Spinner, Toast } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FormContainer } from "./LoginStyles"
import logo from "../../assets/logo.png"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { userLogin } from "../../redux/User/UserAction"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { isLoading } = useSelector((state) => state.user)

  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (username === "" || password === "") {
      toast.error("Please enter all the required fields.", toastOptions)
      return
    }
    dispatch(userLogin({ username, password }))
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/")
    }
  }, [])
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

              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  min="3"
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button type="submit">
                {isLoading ? (
                  <Spinner
                    animation="grow"
                    variant="light"
                    className="spinner"
                  />
                ) : (
                  "Login"
                )}
              </button>
              <span className="form-footer">
                Don't have an account? <Link to="/register">Register</Link>
              </span>
            </form>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  )
}

export default Login
