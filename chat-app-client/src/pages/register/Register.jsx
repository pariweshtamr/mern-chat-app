import React, { useState } from "react"
import { Spinner } from "react-bootstrap"
import { Container } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { FormContainer } from "./RegisterStyles"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import addImage from "../../assets/addAvatar.png"
import { BiShow, BiHide } from "react-icons/bi"

const Register = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [file, setFile] = useState("")

  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (
      displayName === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      toast.error("Please enter all the required fields.")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirm password must be same", toastOptions)
    } else if (displayName.length < 3) {
      toast.error("Username must be longer than 3 characters", toastOptions)
    } else if (password.length < 8) {
      toast.error(
        "Password must be at least 8 characters or longer",
        toastOptions
      )
      return
    }

    try {
      setLoading(true)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <FormContainer>
      <ToastContainer />
      <Container maxW="xl">
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Display Name *"
              name="displayName"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
            <input
              type="email"
              placeholder="Email *"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password *"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="passContainer">
              <input
                type={show ? "text" : "password"}
                placeholder="Confirm Password *"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <div className="showHidePass" onClick={() => setShow(!show)}>
                {show ? <BiShow /> : <BiHide />}
              </div>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <img src={addImage} alt="" />
              <span>Add an avatar</span>
            </label>
          </div>
          {error && <span>Something went wrong!</span>}
          <button type="submit">
            {loading ? (
              <Spinner animation="grow" variant="light" className="spinner" />
            ) : (
              "Sign Up"
            )}
          </button>
          <span className="form-footer">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </Container>
    </FormContainer>
  )
}

export default Register
