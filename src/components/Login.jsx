import React from "react";
import { loginRequest } from "../config";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Home from "./Home";
import styled from "styled-components";

export default function Login() {
  const { accounts, instance } = useMsal();
  const isAuth = useIsAuthenticated();

  return (
    <div>
      {isAuth ? (
        <Home />
      ) : (
        <>
          <Section>
            <h1>Welcome to My Dashboard</h1>
            <button onClick={() => instance.loginRedirect(loginRequest)}>
              Log in
            </button>
          </Section>
        </>
      )}
    </div>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;
