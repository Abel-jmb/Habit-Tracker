const FilterBar = ({setFilter,}) => {
  return (
    <div>
        <h2>Filtrar Habitos</h2>
      <button onClick={() => setFilter("all")}>Todos</button>

      <button onClick={() => setFilter("active")}>Activos</button>

      <button onClick={() => setFilter("done")}>Completados</button>
    </div>
  );
};

export default FilterBar;
