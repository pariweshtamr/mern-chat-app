import styled from "styled-components"

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.owner ? "row-reverse" : "row")};
  gap: 20px;

  .messageInfo {
    display: flex;
    flex-direction: column;
    color: gray;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .messageContent {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: ${(props) => (props.owner ? "flex-end" : "")};

    p {
      background: ${(props) => (props.owner ? "#2679bc" : "#e2e7ea")};
      color: ${(props) => (props.owner ? "#fff" : "#000")};
      padding: 10px 15px;
      border-radius: ${(props) =>
        props.owner ? "10px 0px 10px 10px" : "0 10px 10px 10px"};
      max-width: max-content;
    }
    img {
      width: 50%;
    }
  }
`
