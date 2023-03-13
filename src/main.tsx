import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import LayoutContextProvider from "./contexts/layout-context";
import { theme } from "./theme";
import "./normalize.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LayoutContextProvider>
        <App />
      </LayoutContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
