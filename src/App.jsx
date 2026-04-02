import FilterBar from "./components/FilterBar";
import HabitCard from "./components/habitCard";
import HabitForm from "./components/habitForm";
import Header from "./components/Header";
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
    <main>
      <Header />
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
    </main>
  );
}

export default App;
