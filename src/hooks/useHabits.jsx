import { useState, useEffect } from "react";

export const useHabits = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits')
    return saved ? JSON.parse(saved) : []
  });

  useEffect(()=>{
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])


  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };

    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id) => {
    setHabits(prev => 
      prev.map(h => h.id === id ? {...h, completed: !h.completed} : h)
    )
  }

  const deleteHabit = (id) => {
    setHabits(prev => 
      prev.filter(h => h.id !== id )
    )
  }

  return { habits, addHabit, toggleHabit, deleteHabit };
};
