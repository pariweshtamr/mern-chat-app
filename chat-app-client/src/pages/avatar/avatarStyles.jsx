import styled from "styled-components"

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
  .title-container {
    h1 {
      color: #0b67b5;
      font-size: 3rem;
      font-weight: 600;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      height: 7rem;
      width: 7rem;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }

      img {
        height: 100%;
        width: 100%;
      }
    }
    .selected {
      border: 0.4rem solid #0b67b5;
    }
  }

  .submit-btn {
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
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: linear-gradient(90deg, #2cbdac, #2ec6a2, #31c9a2);
      transition: 0.5s ease all;
    }
  }
`
