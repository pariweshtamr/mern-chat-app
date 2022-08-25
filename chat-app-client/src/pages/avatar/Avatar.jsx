import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { AvatarContainer } from "./AvatarStyles"
import { Buffer } from "buffer"
import { Spinner } from "react-bootstrap"
import { setAvatar } from "../../api/userApi"

const Avatar = () => {
  const navigate = useNavigate()
  const [avatars, setAvatars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  const api = "https://api.multiavatar.com"

  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  }

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar to continue", toastOptions)
      return
    }

    const user = await JSON.parse(localStorage.getItem("chat-app-user"))
    const data = await setAvatar(user._id, { image: avatars[selectedAvatar] })
    if (data?.status === "success") {
      user.isAvatarImageSet = true
      user.avatarImage = data.image
      localStorage.setItem("chat-app-user", JSON.stringify(user))
      navigate("/")
    } else {
      toast.error("Error setting avatar. Please try again later", toastOptions)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    const data = []
    const fetchAvatars = async () => {
      for (let i = 0; i <= 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}?apikey=${
            process.env.REACT_APP_AVATAR_API_KEY
          }`
        )
        const buffer = new Buffer(image.data)
        data.push(buffer.toString("base64"))
      }
      setAvatars(data)
      setIsLoading(false)
    }
    fetchAvatars()
  }, [])

  return (
    <>
      {isLoading && (
        <AvatarContainer>
          <Spinner
            animation="grow"
            variant="primary"
            style={{ height: "5rem", width: "5rem" }}
          />
        </AvatarContainer>
      )}
      <ToastContainer />
      <AvatarContainer>
        <div className="title-container">
          <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, i) => {
            return (
              <div
                key={i}
                className={`avatar ${selectedAvatar === i ? "selected" : ""}`}
              >
                <img
                  src={`data:image/svg+xml;base64, ${avatar}`}
                  alt="avatar"
                  onClick={() => setSelectedAvatar(i)}
                />
              </div>
            )
          })}
        </div>
        <button className="submit-btn" onClick={setProfilePicture}>
          Set as profile picture
        </button>
      </AvatarContainer>
    </>
  )
}

export default Avatar
