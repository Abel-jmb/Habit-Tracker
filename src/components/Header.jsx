import { useContext } from "react";
import ThemeContext from "../context/themeContext";

const Header = () => {
  const { themeClasses, handleTheme, theme } = useContext(ThemeContext);
  return (
    <header className={`flex justify-between items-center text-white p-4 ${themeClasses.bg}`}>
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <button onClick={handleTheme} className={`p-4 rounded-full shadow-md border border-solid border-purple-700`}>{theme === "light" ? "🌙" : "🌞"}</button>
    </header>
  );
};

export default Header;
