import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const checkTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const editTodo = (id, newTodo) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...newTodo } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("todos"));
    if (local && local.length > 0) {
      setTodos(local);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, checkTodo }}>
      <div className="min-h-screen w-full bg-slate-950 py-5 px-3 text-slate-200 text-lg flex flex-col items-center gap-5">
        <h1 className="text-4xl text-white text-center font-semibold">
          Your TODOs
        </h1>

        {/* TODO Form */}
        <TodoForm />

        {/* TODO List */}
        <TodoList todos={todos} />

        <p className="text-base text-slate-400 text-center">
            &copy; 2023 | <a className="text-slate-300" href="https://shahsaminyasar.github.io/portfolio">SHAH SAMIN YASAR</a>
        </p>
      </div>
    </TodoProvider>
  );
};

export default App;
