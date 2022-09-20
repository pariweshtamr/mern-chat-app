import { HomeStyles } from "./homeStyles"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Box,
  Text,
} from "@chakra-ui/react"
import Login from "../login/Login"
import Register from "../register/Register"
import logo from "../../assets/logo.png"

const Home = () => {
  return (
    <HomeStyles>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          p="3"
          bg="#f6f6f6"
          w="100%"
          m="150px auto 15px auto"
          borderRadius="lg"
        >
          <div className="brand">
            <img className="logoImg" src={logo} alt="logo" />
            <h1 className="logoText">
              Chat <span>App</span>
            </h1>
          </div>
        </Box>
        <Box bg="#f6f6f6" w="100%" p={4} borderRadius="lg">
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Register</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </HomeStyles>
  )
}

export default Home
