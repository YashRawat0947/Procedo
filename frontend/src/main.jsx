// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/UnifiedThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider initial="bright" switchDelay={420}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
