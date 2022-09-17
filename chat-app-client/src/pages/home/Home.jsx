import Chat from "../../components/chat/Chat"
import Sidebar from "../../components/sidebar/Sidebar"
import { HomeContainer } from "./HomeStyles"
const Home = () => {
  return (
    <HomeContainer>
      <div className="wrapper">
        <Sidebar />
        <Chat />
      </div>
    </HomeContainer>
  )
}

export default Home
