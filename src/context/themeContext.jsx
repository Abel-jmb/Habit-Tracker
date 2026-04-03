import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const themeClasses = {
    bg: theme === "light" ? "bg-purple-800" : "bg-purple-950",
    text: theme === "light" ? "text-purple-200" : "text-white",
    card: theme === "light" ? "bg-gray-100" : "bg-purple-900",
  };

  const data = { theme, handleTheme, themeClasses };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
