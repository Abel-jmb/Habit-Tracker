const ProgressBar = ({ progress }) => {
  return (
    <div className="p-4 bg-purple-900 rounded-xl border border-purple-700 shadow-lg">
      <label
        htmlFor="habit-progress"
        className="block mb-2 text-purple-100 font-bold text-sm tracking-wide">
        PROGRESO DE HOY: <span className="text-lime-400">{progress}%</span>
      </label>
      <div className="w-full bg-purple-950 rounded-full h-8 border-2 border-purple-800 p-1 overflow-hidden">
        <div
          className="bg-lime-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(163,230,53,0.4)]"
          style={{ width: `${progress}%` }}>
          <div className="w-full h-full bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
