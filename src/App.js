import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { config } from "./config";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isAuth: false,
  //     user: {},
  //   };

  //   this.login = this.login.bind(this);
  //   this.publicClientApplication = new PublicClientApplication({
  //     auth: {
  //       clientId: config.appId,
  //       redirectUri: config.redirectUri,
  //       authority: config.authority,
  //     },
  //     cache: {
  //       cacheLocation: "sessionStorage",
  //       storeAuthStateInCookie: true,
  //     },
  //   });
  // }

  // async login() {
  //   try {
  //     await this.publicClientApplication.loginPopup({
  //       scopes: config.scopes,
  //       prompt: "select_account",
  //     });
  //     this.setState({ isAuth: true });
  //     console.log("login success");
  //   } catch (err) {
  //     console.log("login fail", err);
  //     this.setState({ isAuth: false, user: {}, error: err });
  //   }
  // }

  // logout() {
  //   this.publicClientApplication.logoutRedirect();
  // }

  return <Login />;
}

export default App;
