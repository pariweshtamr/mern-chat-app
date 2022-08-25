import { useState, useEffect } from "react"
import { ContactsContainer } from "./ContactsStyles"
import logo from "../../assets/logo.png"

const Contacts = ({ contacts, currentUser }) => {
  console.log(contacts)
  const [currentUsername, setCurrentUsername] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)

  const changeCurrentChat = (index, contact) => {}

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage)
      setCurrentUsername(currentUser.username)
    }
  }, [currentUser])

  return (
    <>
      {currentUserImage && currentUsername && (
        <ContactsContainer>
          <div className="brand">
            <img src={logo} alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64, ${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h4>{contact.username}</h4>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64, ${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="current-username">
              <h1>{currentUsername}</h1>
            </div>
          </div>
        </ContactsContainer>
      )}
    </>
  )
}

export default Contacts
