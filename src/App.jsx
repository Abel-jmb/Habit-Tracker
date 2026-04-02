import FilterBar from "./components/FilterBar";
import HabitCard from "./components/habitCard";
import HabitForm from "./components/habitForm";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import { ThemeProvider } from "./context/themeContext";
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
    <ThemeProvider >
    <main className="min-h-screen bg-white max-w-md mx-auto px-4">
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
    </ThemeProvider>
  );
}

export default App;
