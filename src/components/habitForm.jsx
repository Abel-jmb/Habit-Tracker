import { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [form, setForm] = useState({ habit: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.habit.trim()) return;
    addHabit(form.habit.trim());
    setForm({ habit: "" });
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-lime-400 text-purple-950 rounded-full shadow-[0_0_25px_rgba(163,230,53,0.5)] flex items-center justify-center text-4xl font-bold leading-none hover:scale-110 active:scale-90 transition-all duration-300 z-40">
        <span className="-mt-1">+</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-sm transition-opacity duration-300">
          <section className="w-full max-w-md bg-purple-900 border border-purple-700 p-8 rounded-3xl shadow-2xl scale-100 opacity-100 transition-all transform">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-white tracking-tight">
                Nuevo <span className="text-lime-400">Hábito</span>
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="habit"
                  className="block text-xs font-bold uppercase tracking-widest text-purple-300 mb-2">
                  Nombre del hábito
                </label>
                <input
                  onChange={(e) => setForm({ habit: e.target.value })}
                  className="w-full bg-purple-950 border border-purple-700 rounded-xl p-4 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder:text-purple-700"
                  type="text"
                  name="habit"
                  id="habit"
                  placeholder="Ej: Meditar 5 minutos"
                  value={form.habit}
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-purple-950 font-black py-4 rounded-xl shadow-lg hover:bg-lime-300 active:scale-[0.98] transition-all uppercase tracking-widest">
                ¡Empezar ahora!
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default HabitForm;
