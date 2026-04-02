import { useState, useEffect } from "react";

export const useHabits = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits')
    return saved ? JSON.parse(saved) : []
  });

  const [filter, setFilter] = useState("all")

  useEffect(()=>{
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])


  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      completed: false,
      createdAt: new Date().toISOString(),
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

  const filteredHabits = habits.filter(h => {
    if(filter === "active") return !h.completed
    if(filter === "done") return h.completed
    return true
  })

  const progress = habits.length
  ? Math.round((habits.filter(h => h.completed).length / habits.length) * 100)
  : 0

  return { habits, addHabit, toggleHabit, deleteHabit, filter, setFilter, filteredHabits, progress };
};
