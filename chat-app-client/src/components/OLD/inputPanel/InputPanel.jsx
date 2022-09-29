import { InputPanelContainer } from "./InputPanelStyles"
import Attach from "../../assets/attach.png"
import Img from "../../assets/img.png"
import { IoMdSend } from "react-icons/io"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { ChatContext } from "../../context/ChatContext"
import { useState } from "react"
import {
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore"
import { v4 as uuid } from "uuid"
import { db, storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const InputPanel = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const [error, setError] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid)

      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            })
          })
        }
      )
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })
    setText("")
    setImg(null)
  }
  return (
    <InputPanelContainer>
      <div className="add">
        <img src={Attach} alt="" />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
      </div>
      <input
        type="text"
        placeholder="Aa"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send" onClick={handleSend}>
        <button>
          <IoMdSend />
        </button>
      </div>
    </InputPanelContainer>
  )
}

export default InputPanel
