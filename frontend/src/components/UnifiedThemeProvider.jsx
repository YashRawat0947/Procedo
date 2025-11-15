// src/theme/UnifiedThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import ThemeLoader from "../components/ThemeLoader"; // below I supply ThemeLoader

const ThemeContext = createContext(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Safer fallback to avoid hard crash while dev-ing — logs a warning
    console.warn("useTheme used outside ThemeProvider; returning safe defaults.");
    return {
      theme: "bright",
      switchTheme: () => {},
      isLoading: false,
      colors: {},
    };
  }
  return ctx;
};

export const ThemeProvider = ({ initial = "bright", children, switchDelay = 420 }) => {
  const [theme, setTheme] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);

  // apply theme variables quickly to prevent flash
  const applyThemeVars = (name) => {
    // simple mapping to let loader color vary — you can expand to import theme configs
    if (name === "dark") {
      document.documentElement.style.setProperty("--bg", "#0F172A");
      document.documentElement.style.setProperty("--text", "#F1F5F9");
      document.documentElement.style.setProperty("--primary", "#F24E1E");
    } else {
      document.documentElement.style.setProperty("--bg", "#FFFFFF");
      document.documentElement.style.setProperty("--text", "#1F2937");
      document.documentElement.style.setProperty("--primary", "#F24E1E");
    }
    // body immediate
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--bg") || (name === "dark" ? "#0F172A" : "#FFFFFF");
    document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue("--text") || (name === "dark" ? "#F1F5F9" : "#1F2937");
  };

  useEffect(() => {
    // apply initial theme vars on mount
    applyThemeVars(theme);
    document.documentElement.style.transition = "background-color 250ms ease, color 250ms ease";
    // eslint-disable-next-line
  }, []);

  const switchTheme = (next) => {
    if (!next || next === theme) return;
    setIsLoading(true);
    // apply CSS variables immediately so components render with new CSS vars
    applyThemeVars(next);

    // wait a short delay (loader visible) then commit
    setTimeout(() => {
      setTheme(next);
      // hide loader shortly after
      setTimeout(() => setIsLoading(false), switchDelay);
    }, 250);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, isLoading }}>
      {/* ThemeLoader sits above the app UI when isLoading === true */}
      {isLoading && <ThemeLoader theme={theme} />}
      {children}
    </ThemeContext.Provider>
  );
};
