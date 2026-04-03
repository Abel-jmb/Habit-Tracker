import { useContext } from "react";
import ThemeContext from "../context/themeContext";

const Header = () => {
  const { themeClasses, handleTheme, theme } = useContext(ThemeContext);
  return (
    <header
      className={`
      flex justify-between items-center p-5 ${themeClasses.bg}
    `}>
      <h1 className="text-2xl font-black text-white tracking-tight">
        Habit<span className="text-lime-400">Tracker</span>
      </h1>
      <button
        onClick={handleTheme}
        className={`
          w-12 h-12 flex items-center justify-center
          rounded-xl border-2 border-purple-700
          bg-purple-900/50 hover:bg-purple-800
          transition-all duration-300 active:scale-95
          shadow-[0_0_15px_rgba(163,230,53,0.2)]
          hover:border-lime-400 group
        `}>
        <span className="text-2xl group-hover:scale-110 transition-transform">
          {theme === "light" ? "🌙" : "🌞"}
        </span>
      </button>
    </header>
  );
};

export default Header;
