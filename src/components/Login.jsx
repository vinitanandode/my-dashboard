import React, { useEffect } from "react";
import { loginRequest } from "../config";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Home from "./Home";
import styled from "styled-components";

export default function Login() {
  const { accounts, instance } = useMsal();
  const isAuth = useIsAuthenticated();

  useEffect(() => {
    console.log("auth:", isAuth);
  });

  return (
    <div>
      {isAuth ? (
        <Home />
      ) : (
        <>
          <Section>
            <h1 className="welcomeMessage">Welcome to My Dashboard</h1>
            <button
              className="btnLogin"
              onClick={() => instance.loginRedirect(loginRequest)}
            >
              Log in
            </button>
          </Section>
        </>
      )}
    </div>
  );
}

const Section = styled.section`
  /* margin-left: 18vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;

  .welcomeMessage {
    margin: 1rem;
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
  }

  .btnLogin {
    margin: 1rem;
    width: 10%;
    height: 2.5rem;
    border-radius: 1rem;
    background: #212121;
    border: none;
    color: #ffc107;
    cursor: pointer;

    &:hover {
      background: #ffc107;
      color: #212121;
    }
  }
`;
