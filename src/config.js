// export const config = {
//   appId: "2f5041bc-30eb-43a2-bb19-05e848698b23",
//   redirectUri: "https://localhost:3000",
//   scopes: ["user.read"],
//   authority: "https://login.microsoftonline.com/vintechno.onmicrosoft.com",
// };
import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SignUpSignIn",
    // editProfile: "B2C_1_edit_profile_v2",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://vintechno.b2clogin.com/vintechno.onmicrosoft.com/B2C_1_SignUpSignIn",
    },
    // editProfile: {
    //   authority:
    //     "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_edit_profile_v2",
    // },
  },
  authorityDomain: "vintechno.b2clogin.com",
};

export const msalConfig = {
  auth: {
    clientId: "2f5041bc-30eb-43a2-bb19-05e848698b23",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "http://localhost:3000", //window.location.protocol + "//" + window.location.host, //
    navigateToLoginRequestUrl: true,
    postLogoutRedirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["openid"],
};

export const tokenRequest = {
  scopes: [], // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};
