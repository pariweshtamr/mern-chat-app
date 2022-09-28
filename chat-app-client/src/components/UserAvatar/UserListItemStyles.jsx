import styled from "styled-components"

export const UserListItemStyles = styled.div`

.userChat {
    padding: 10px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    cursor: pointer;

    &:hover {
      background-color: #edf2f6;
      border-radius: 10px;
      margin: 0 5pxpx;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .userChatInfo {
      span {
        font-size: 16px;
      }
      p {
        font-size: 14px;
        color: gray;
      }
    }
`