import HabitCard from "./components/habitCard";
import HabitForm from "./components/habitForm";
import { useHabits } from "./hooks/useHabits";

function App() {
  const { habits, addHabit, toggleHabit, deleteHabit } = useHabits();

  return (
    <>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit}/>
      {habits.map((h) => (
        <HabitCard key={h.id} habit={h} toggleHabit={toggleHabit} deleteHabit={deleteHabit}/>
      ))}
    </>
  );
}

export default App;
