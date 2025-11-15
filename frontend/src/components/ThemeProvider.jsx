import React, { createContext, useContext, useState } from "react";
import Loader from "./Loader";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("bright"); // default theme
  const [isLoading, setIsLoading] = useState(false);

  const switchTheme = (newTheme) => {
    if (newTheme === theme) return;

    setIsLoading(true);

    setTimeout(() => {
      setTheme(newTheme);
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {isLoading && <Loader theme={theme} />}
      {children}
    </ThemeContext.Provider>
  );
};
