import { useState } from "react";

export const useHabits = () => {
  const [habits, setHabit] = useState([]);

  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };

    setHabit([...habits, newHabit]);
  };

  return { habits, addHabit };
};
