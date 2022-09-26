import { useState } from "react"
import { useSelector } from "react-redux"
import { SearchBarContainer } from "./SearchBarStyles"
import { BsSearch } from "react-icons/bs"
import { getSearchedUsers } from "../../api/userApi"

const SearchBar = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [searchResult, setSearchResult] = useState([])
  const { token } = userInfo
  const onSearch = async (query) => {
    const { value } = query.target

    const { users } = await getSearchedUsers({ value, token })
    console.log(users)
    setSearchResult(users)
  }
  return (
    <SearchBarContainer>
      <div className="searchForm">
        <BsSearch />
        <input type="text" placeholder="Find a user" onChange={onSearch} />
      </div>

      {searchResult?.map((u) => (
        <div className="userChat" key={u._id}>
          <img src={u.avatarImage} alt="" />
          <div className="userChatInfo">
            <span>{u.displayName}</span>
            <p>{u.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </SearchBarContainer>
  )
}

export default SearchBar
