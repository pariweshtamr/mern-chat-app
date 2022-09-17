import { ChatsContainer } from "./ChatsStyles"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase"

const Chats = () => {
  const [chats, setChats] = useState([])
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data())
      })

      return () => {
        unsub()
      }
    }
    user.uid && getChats()
  }, [user.uid])

  return (
    <ChatsContainer>
      {/* convert object into array */}
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </ChatsContainer>
  )
}

export default Chats
