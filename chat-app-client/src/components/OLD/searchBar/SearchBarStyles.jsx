import styled from "styled-components"

export const SearchBarContainer = styled.div`
  border-bottom: 1px solid #f4f5f4;

  .searchForm {
    padding: 10px;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 10%;
      color: gray;
      transform: translateY(-50%);
    }
    input {
      background: #f4f5f4;
      width: 100%;
      border-radius: 50px;
      padding: 5px 45px;
      border: none;
      color: #000;
      outline: none;

      &::placeholder {
        color: gray;
      }
    }
  }

  .userChat {
    padding: 10px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    cursor: pointer;

    &:hover {
      background-color: #f4f5f4;
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
  }
`
