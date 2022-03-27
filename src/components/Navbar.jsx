import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useMsal } from "@azure/msal-react";

export default function Navbar() {
  const { accounts, instance } = useMsal();

  return (
    <Nav>
      <div className="title">
        <h4>Hi {accounts[0]?.name}</h4>
        <h1>
          Welcome to <span>My Dashboard</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="logout">
        <button
          className="logout"
          onClick={() =>
            instance.logoutRedirect({ postLogoutRedirectUri: "/" })
          }
        >
          Logout
        </button>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }

  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #ffc107;
      }
      &:focus {
        outline: none;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
        }
      }
    }
  }
`;
