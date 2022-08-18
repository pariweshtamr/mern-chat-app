import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FormContainer } from "./registerStyles"
import logo from "../../assets/logo.png"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const handleOnSubmit = (e) => {
    e.preventDefault()
    alert("Form")
  }
  return (
    <FormContainer>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="brand">
          <img src={logo} alt="" />
          <h1>Chat App</h1>
        </div>
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
        <button type="submit">Create User</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </FormContainer>
  )
}

export default Register
