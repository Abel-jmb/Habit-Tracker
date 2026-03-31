const HabitCard = ({ habit }) => {

  return (
    <article >
        <header>
            <h3>{habit.name}</h3>
        </header>
    </article>
  );
};

export default HabitCard;
