import { useState } from "react"
import { SearchBarContainer } from "./SearchBarStyles"
import { BsSearch } from "react-icons/bs"

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  return (
    <SearchBarContainer>
      <div className="searchForm">
        <BsSearch />
        <input type="text" placeholder="Find a user" />
      </div>
    </SearchBarContainer>
  )
}

export default SearchBar
