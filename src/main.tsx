import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LayoutContextProvider from "./contexts/layout-context";
import "./normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LayoutContextProvider>
      <App />
    </LayoutContextProvider>
  </React.StrictMode>
);
