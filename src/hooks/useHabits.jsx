import { useState } from "react";

export const useHabits = () => {
  const [habit, setHabit] = useState([]);

  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };

    setHabit([...habit, newHabit]);
  };

  return { habit, addHabit };
};
