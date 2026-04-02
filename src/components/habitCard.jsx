const HabitCard = ({ habit, toggleHabit, deleteHabit}) => {

  const {name, id, completed, createdAt} = habit
  let date = new Date(createdAt).toLocaleDateString()
  return (
    <article>
      <header>
        <h3>{name}</h3>
        <p>{date}</p>
      </header>
      <div>
        <label htmlFor="completed">
          <input type="checkbox" name="completed" checked={completed} onChange={() => toggleHabit(id)}/>
        </label>

      <button onClick={() => deleteHabit(id)}>Eliminar habito</button>
      </div>
    </article>
  );
};

export default HabitCard;
