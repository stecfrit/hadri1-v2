import React, { createContext, useEffect, useState } from "react";

const localStorage = window.localStorage;
const savedThemeLocal = localStorage.getItem("globalTheme");

const initial_theme = !!savedThemeLocal ? savedThemeLocal : "gold";

export const ThemeContext = createContext({
  theme: initial_theme,
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initial_theme);

  const setThemeHandler = (chosen_theme) => {
    setTheme(chosen_theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
