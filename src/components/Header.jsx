import { useContext } from "react";
import ThemeContext from "../context/themeContext";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <header className={`flex justify-between items-center text-white p-4 ${theme === "light" ? `bg-purple-800` : `bg-purple-950`}`}>
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <button onClick={handleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
    </header>
  );
};

export default Header;
