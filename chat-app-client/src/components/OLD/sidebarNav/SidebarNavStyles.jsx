import styled from "styled-components"

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f5f4;
  height: 70px;
  padding: 10px;
  color: #000;

  .logo {
    font-weight: bold;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      background: #e6eaef;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      object-fit: cover;
    }

    button {
      background: #f4f5f4;
      border-radius: 5px;
      padding: 5px 10px;
      color: #000;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
  }
`
