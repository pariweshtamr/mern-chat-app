import { SearchBarContainer } from "./SearchBarStyles"
import user from "../../assets/user1.jpeg"

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </SearchBarContainer>
  )
}

export default SearchBar
