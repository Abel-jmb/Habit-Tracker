const HabitCard = ({ habit, toggleHabit, deleteHabit }) => {
  const { name, id, completed, createdAt } = habit;
  let date = new Date(createdAt).toLocaleDateString();

  return (
    <article className={`
      flex items-center justify-between p-4 mb-3 rounded-2xl border transition-all duration-500
      ${completed 
        ? 'bg-purple-900/20 border-lime-500/30 opacity-70' 
        : 'bg-purple-900 border-purple-700 shadow-lg'}
    `}>
      <div className="flex items-center gap-4">
        <label className="relative flex items-center cursor-pointer group">
          <input 
            type="checkbox" 
            className="peer appearance-none w-6 h-6 border-2 border-purple-500 rounded-md checked:bg-lime-400 checked:border-lime-400 transition-all cursor-pointer"
            checked={completed} 
            onChange={() => toggleHabit(id)}
          />
          <span className="absolute text-purple-950 opacity-0 peer-checked:opacity-100 pointer-events-none left-1.5 font-bold">✓</span>
        </label>

        <div className="flex flex-col">
          <h3 className={`font-bold text-lg leading-tight transition-all ${completed ? 'line-through text-purple-400' : 'text-white'}`}>
            {name}
          </h3>
          <p className="text-xs text-purple-400/80 font-medium uppercase tracking-wider">{date}</p>
        </div>
      </div>
      <button 
        onClick={() => deleteHabit(id)}
        className="p-2 text-purple-400 hover:text-red-400 hover:bg-red-500 rounded-lg transition-colors cursor-pointer group"
        title="Eliminar hábito"
      >
        <span className="group-hover:scale-110 block transition-transform text-xl">🗑️</span>
      </button>
    </article>
  );
};

export default HabitCard
