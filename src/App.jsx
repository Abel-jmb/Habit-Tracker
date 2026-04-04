import { useContext } from "react";
import FilterBar from "./components/FilterBar.jsx";
import HabitCard from "./components/HabitCard.jsx";
import HabitForm from "./components/HabitForm.jsx";
import Header from "./components/Header.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ThemeContext from "./context/themeContext.jsx";
import { useHabits } from "./hooks/useHabits.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { themeClasses } = useContext(ThemeContext);

  const {
    addHabit,
    toggleHabit,
    deleteHabit,
    setFilter,
    filteredHabits,
    filter,
    progress,
  } = useHabits();

  return (
    <>
    <main
      className={`min-h-screen max-w-md mx-auto px-4 ${themeClasses.bg} md:max-w-2xl lg:max-w-4xl`}>
      <Header />
      <div className="lg:grid grid-cols-2 lg:gap-6">
        <div>
          <ProgressBar progress={progress} />
          <FilterBar setFilter={setFilter} currentFilter={filter} />
          <HabitForm addHabit={addHabit} />
        </div>
        <div>
          {filteredHabits.map((h) => (
            <HabitCard
              key={h.id}
              habit={h}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          ))}
        </div>
      </div>
    <Footer />
    </main>
    </>
  );
}

export default App;
