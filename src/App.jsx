import { useContext } from "react";
import FilterBar from "./components/FilterBar";
import HabitCard from "./components/habitCard";
import HabitForm from "./components/habitForm";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import ThemeContext from "./context/themeContext";
import { useHabits } from "./hooks/useHabits";

function App() {

  const {themeClasses} = useContext(ThemeContext)

  const {
    addHabit,
    toggleHabit,
    deleteHabit,
    setFilter,
    filteredHabits,
    filter,
    progress
  } = useHabits();

  return (
    <main className={`min-h-screen max-w-md mx-auto px-4 ${themeClasses.bg}`}>
      <Header />
      <ProgressBar progress={progress}/>
      <FilterBar
        setFilter={setFilter}
        currentFilter={filter}
      />
      {filteredHabits.map((h) => (
        <HabitCard
        key={h.id}
        habit={h}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        />
      ))}
      <HabitForm addHabit={addHabit} />
    </main>
  );
}

export default App;
