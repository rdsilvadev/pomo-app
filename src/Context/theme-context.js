import React from 'react';
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const themeHandler = () => {
    const getTheme = localStorage.getItem("theme");
    return getTheme === null ? "light" : getTheme;
  };
  const [theme, setTheme] = useState(themeHandler());
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
