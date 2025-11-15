// src/App.jsx
import React from "react";
import { useTheme} from "./components/ThemeProvider";
import AppBright from "./theme/bright/AppBright";
import AppDark from "./theme/dark/AppDark";

export default function App() {
  const { theme } = useTheme();

  // Ensure we render only the correct themed app
  return theme === "dark" ? <AppDark /> : <AppBright />;
}
