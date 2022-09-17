import styled from "styled-components"

export const ChatContainer = styled.div`
  flex: 2;
  background: #fffefe;

  .chatInfo {
    height: 70px;
    border-bottom: 2px solid #f4f5f4;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .chatIcons {
      display: flex;
      gap: 10px;
      img {
        height: 24px;
        cursor: pointer;
      }
    }
  }
`
