import { useState } from "react";

const initialForm = {
  //   id: "",
  habit: "",
  //   completed: false,
};

const HabitForm = ({ addHabit }) => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.habit.trim()) return alert("Tiene que Agregar un Habito...");

    addHabit(form.habit.trim());
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
      <section>
        <h2>Agregar Hábito</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="habit">Nombre del hábito:</label>
          <input
            onChange={handleChange}
            type="text"
            name="habit"
            id="habit"
            placeholder="Ej: Leer 20mins diarios"
            value={form.habit}
            required
          />
          <button type="submit">Agregar Hábito</button>
        </form>
      </section>
    </>
  );
};

export default HabitForm;
