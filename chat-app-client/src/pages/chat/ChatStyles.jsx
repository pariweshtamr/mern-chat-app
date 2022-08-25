import styled from "styled-components"

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f6f6f6;

  .container {
    height: 85%;
    width: 85%;
    background: linear-gradient(90deg, #0b67b5, #2679bc, #438ccb);
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 768px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`
