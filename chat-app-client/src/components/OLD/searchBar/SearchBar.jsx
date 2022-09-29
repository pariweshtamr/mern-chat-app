import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SearchBarContainer } from "./SearchBarStyles"
import { BsSearch } from "react-icons/bs"
import { getSearchedUsers } from "../../../api/userApi"
import { Spinner } from "@chakra-ui/react"
import { createChat } from "../../../api/chatApi"
import { createOneToOneChat } from "../../../redux/Chat/ChatAction"

const SearchBar = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { _id } = userInfo.user
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const { token } = userInfo
  const onSearch = async (query) => {
    setLoading(true)
    const { value } = query.target
    const { users } = await getSearchedUsers({ value, token })
    setSearchResult(users)
    setLoading(false)
  }

  const accessChat = async (userId) => {
    try {
      dispatch(createOneToOneChat({ _id, userId, token }))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SearchBarContainer>
      <div className="searchForm">
        <BsSearch />
        <input type="text" placeholder="Find a user" onChange={onSearch} />
      </div>

      {loading ? (
        <Spinner size="lg" />
      ) : (
        searchResult?.map((u) => (
          <div
            className="userChat"
            key={u._id}
            onClick={() => accessChat(u._id)}
          >
            <img src={u.avatarImage} alt="" />
            <div className="userChatInfo">
              <span>{u.displayName}</span>
              <p>{u.email}</p>
            </div>
          </div>
        ))
      )}
    </SearchBarContainer>
  )
}

export default SearchBar
