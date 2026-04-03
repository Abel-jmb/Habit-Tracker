const FilterBar = ({ setFilter, currentFilter }) => {
  const getBtnStyles = (filterName) => {
    const isActive = currentFilter === filterName;

    return `flex-1 py-2 px-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 border
      ${
        isActive
          ? "bg-lime-400 text-purple-950 border-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.5)]"
          : "bg-purple-800 text-purple-100 border-purple-600 hover:bg-purple-700"
      }`;
  };

  return (
    <div className="bg-purple-900/40 p-3 rounded-2xl border border-purple-700/50">
      <h2 className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-3 ml-1">
        Filtrar Hábitos
      </h2>

      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={getBtnStyles("all")}>
          Todos
        </button>

        <button
          onClick={() => setFilter("active")}
          className={getBtnStyles("active")}>
          Activos
        </button>

        <button
          onClick={() => setFilter("done")}
          className={getBtnStyles("done")}>
          Hechos
        </button>
      </div>
    </div>
  );
};
export default FilterBar;
