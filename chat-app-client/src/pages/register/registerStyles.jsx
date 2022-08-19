import styled from "styled-components"

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  background-color: #e6eaef;
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #000;
      text-transform: uppercase;
      span {
        color: #2679bc;
        font-weight: 500;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f6f6f6;
    border-radius: 2rem;
    padding: 3rem;
    input {
      background-color: #fefefe;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      color: #000;
      width: 100%;
      font-size: 1rem;
      &::placeholder {
        letter-spacing: 1px;
      }
      &:focus {
        outline: 1px solid #2679bc;
      }
    }
    button {
      background: linear-gradient(90deg, #0b67b5, #2679bc, #438ccb);
      color: #fff;
      padding: 1.2rem 2rem;
      border-radius: 50px;
      border: none;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover {
        background: linear-gradient(90deg, #2cbdac, #2ec6a2, #31c9a2);

        transition: 0.5s ease all;
      }
    }
    span {
      color: #000;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1px;
      a {
        color: #2679bc;
        text-decoration: none;
        font-weight: bold;
        font-size: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
