import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodoContext();

  const [todoText, setTodoText] = useState("");

  return (
    <form
      className="flex flex-row w-full max-w-lg rounded-lg overflow-hidden shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();
        if (todoText) {
          addTodo({
            id: Date.now(),
            todo: todoText,
            isDone: false,
          });
          setTodoText("")
        }
      }}
    >
      <input
        type="text"
        placeholder="Write a todo here..."
        className="text-slate-400 font-regular px-3 py-2 w-full bg-slate-800 outline-none"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="py-2 px-3 bg-slate-900 text-slate-300 font-semibold">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
