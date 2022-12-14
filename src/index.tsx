import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log("onKeycloakTokens", tokens);
};

root.render(
  <ReactKeycloakProvider
    initOptions={{ onLoad: "login-required" }}
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ReactKeycloakProvider>
);
