import { useState } from "react";

const initialForm = {
  //   id: "",
  habit: "",
  //   completed: false,
};

const HabitForm = ({addHabit}) => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.habit) return alert("Tiene que Agregar un Habito...");

    addHabit(form.habit);
    handleReset();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <>
      <h2>Agregar Habito</h2>
      <input
        onChange={handleChange}
        type="text"
        name="habit"
        id="habit"
        placeholder="Agrega un nuevo habito"
        value={form.habit}
      />
      <button onClick={handleSubmit}>Agregar Habito</button>
    </>
  );
};

export default HabitForm;
