import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row, Spinner, Toast } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FormContainer } from "./RegisterStyles"
import logo from "../../assets/logo.png"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import addImage from "../../assets/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"

const Register = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [file, setFile] = useState("")
  const { isLoading } = useSelector((state) => state.user)

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
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate("/")
          })
        }
      )
    } catch (error) {
      setError(true)
    }

    // dispatch(userRegister({ username, password, email }))

    // setTimeout(() => {
    //   navigate("/")
    // }, 4000)
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
                  placeholder="Display Name"
                  name="displayName"
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
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
                {isLoading ? (
                  <Spinner
                    animation="grow"
                    variant="light"
                    className="spinner"
                  />
                ) : (
                  "Sign Up"
                )}
              </button>
              <span className="form-footer">
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
