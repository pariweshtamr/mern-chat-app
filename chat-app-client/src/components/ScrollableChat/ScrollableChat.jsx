import { Avatar, Tooltip } from "@chakra-ui/react"
import ScrollableFeed from "react-scrollable-feed"
import { isLastMessage, isSameSender } from "../../config/ChatLogic"
import { ChatState } from "../../context/ChatContext"

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState()
  console.log(messages)
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div
            className="d-flex"
            key={m._id}
            style={{
              flexDirection: `${
                m.sender._id === user.user._id ? "row-reverse" : "row"
              }`,
            }}
          >
            {(isSameSender(messages, m, i, user.user._id) ||
              isLastMessage(messages, i, user.user._id)) && (
              <Tooltip
                label={m.sender.displayName}
                placement="bottom-start"
                hasArrow
              >
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  curso="pointer"
                  name={m.sender.displayName}
                  src={m.sender.avatarImage}
                />
              </Tooltip>
            )}

            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user.user._id ? "#2679bc" : "#edf2f6"
                }`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                marginTop: "5px",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat
