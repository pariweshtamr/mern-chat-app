import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllUsers } from "../../api/userApi"
import Contacts from "../../components/contacts/Contacts"
import { ChatContainer } from "./ChatStyles"

const Chat = () => {
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  const { _id } = user

  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }
    setCurrentUser(user)
  }, [user])

  useEffect(() => {
    const fetchContacts = async () => {
      if (currentUser) {
        if (currentUser?.isAvatarImageSet) {
          const res = await getAllUsers(currentUser._id)
          setContacts(res.users)
        } else {
          navigate("/avatar")
        }
      }
    }
    fetchContacts()
  }, [currentUser])

  return (
    <>
      <ChatContainer>
        <div className="container">
          <Contacts contacts={contacts} currentUser={currentUser} />
        </div>
      </ChatContainer>
    </>
  )
}

export default Chat
