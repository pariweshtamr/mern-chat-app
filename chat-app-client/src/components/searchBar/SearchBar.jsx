import { SearchBarContainer } from "./SearchBarStyles"
import { useState } from "react"
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "../../firebase"
import { useSelector } from "react-redux"

const SearchBar = () => {
  const { user } = useSelector((state) => state.user)
  const [username, setUsername] = useState("")
  const [searchedUser, setSearchedUser] = useState(null)
  const [error, setError] = useState(false)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setSearchedUser(doc.data())
      })
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    //check whether the group (chats is firestore) exists if not create new group
    const combinedId =
      user.uid > searchedUser.uid
        ? user.uid + searchedUser.uid
        : searchedUser.uid + user.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] })
      }

      // create user chats
      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: searchedUser.uid,
          displayName: searchedUser.displayName,
          photoURL: searchedUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      })

      await updateDoc(doc(db, "userChats", searchedUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      })
    } catch (error) {}

    setSearchedUser(null)
    setUsername("")
  }

  return (
    <SearchBarContainer>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          onKeyDown={handleKey}
        />
      </div>
      {error && <span className="text-danger">User not found!</span>}
      {searchedUser && (
        <div className="userChat" onClick={handleSelect}>
          <img src={searchedUser.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{searchedUser.displayName}</span>
          </div>
        </div>
      )}
    </SearchBarContainer>
  )
}

export default SearchBar
