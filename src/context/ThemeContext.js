import React, { createContext, useState } from 'react';

const themes = {
  dark: {
    text: 'hsl(0, 0%, 100%)',
    bg: 'hsl(207, 26%, 17%)',
    element: 'hsl(209, 23%, 22%)',
  },

  light: {
    text: 'hsl(200, 15%, 8%)',
    bg: 'hsl(0, 0%, 98%)',
    element: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 52%)',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: darkMode ? themes.dark : themes.light,
        toggleMode,
        darkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
