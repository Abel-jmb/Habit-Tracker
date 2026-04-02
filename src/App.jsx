import FilterBar from "./components/FilterBar";
import HabitCard from "./components/habitCard";
import HabitForm from "./components/habitForm";
import ProgressBar from "./components/ProgressBar";
import { useHabits } from "./hooks/useHabits";

function App() {
  const {
    addHabit,
    toggleHabit,
    deleteHabit,
    setFilter,
    filteredHabits,
    progress
  } = useHabits();

  return (
    <>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      {filteredHabits.map((h) => (
        <HabitCard
          key={h.id}
          habit={h}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
      <FilterBar
        setFilter={setFilter}
      />
      <ProgressBar progress={progress}/>
    </>
  );
}

export default App;
