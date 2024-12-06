
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Save theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; 
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const themevalue={
theme, toggleTheme
  }

  return (
    <ThemeContext.Provider value={themevalue}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider};
