import { useEffect } from "react"
import { useContext, useState } from "react"
import { ChatContext } from "../../context/ChatContext"
import { db } from "../../firebase"
import { doc, onSnapshot } from "firebase/firestore"

import Message from "../message/Message"
import { MessagesContainer } from "./MessagesStyles"

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatId])

  return (
    <MessagesContainer>
      {messages.map((msg) => (
        <Message message={msg} key={msg.id} />
      ))}
    </MessagesContainer>
  )
}

export default Messages
