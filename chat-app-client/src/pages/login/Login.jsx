import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Col, Container, Row, Spinner, Toast } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FormContainer } from "./LoginStyles"
import logo from "../../assets/logo.png"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      navigate("/")
    } catch (error) {
      setError(true)
      setLoading(false)
    }
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

              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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

              {error && <span>Something went wrong!</span>}

              <button type="submit">
                {loading ? (
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
