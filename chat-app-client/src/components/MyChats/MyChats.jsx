import React from "react"
import { useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import SidebarNav from "../sidebarNav/SidebarNav"

const MyChats = () => {
  return (
    <div>
      <SidebarNav />
      <SearchBar />
    </div>
  )
}

export default MyChats
