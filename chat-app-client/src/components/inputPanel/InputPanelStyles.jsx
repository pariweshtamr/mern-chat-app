import styled from "styled-components"

export const InputPanelContainer = styled.div`
  height: 60px;
  background: inherit;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .add {
    display: flex;
    gap: 15px;

    img {
      width: 24px;
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #f4f5f4;
    margin: 0 15px;
    border-radius: 50px;
    padding: 5px 15px;

    &::placeholder {
      color: gray;
    }
  }

  .send {
    button {
      background: transparent;
      border: none;
      outline: none;

      svg {
        width: 26px;
        height: 26px;
        color: #2679bc;
      }
    }
  }
`
