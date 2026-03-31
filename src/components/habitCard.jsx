const HabitCard = ({ habit, toggleHabit, deleteHabit }) => {
  return (
    <article>
      <header>
        <h3>{habit.name}</h3>
      </header>
      <div>
        <label htmlFor="completed">
          <input type="checkbox" name="completed" checked={habit.completed} onChange={() => toggleHabit(habit.id)}/>
        </label>

      <button onClick={() => deleteHabit(habit.id)}>Eliminar habito</button>
      </div>
    </article>
  );
};

export default HabitCard;
