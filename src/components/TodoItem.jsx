import PropTypes from "prop-types";
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { checkTodo, editTodo, deleteTodo } = useTodoContext();

  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);

  const check = () => {
    if(!isEditable) checkTodo(todo.id); else alert("Please save first");
  };

  const edit = () => {
    if (isEditable) {
      editTodo(todo.id, { ...todo, todo: todoText });
    }

    setIsEditable((prev) => !prev);
  };

  const deleteItem = () => {
    deleteTodo(todo.id);
  };

  return (
    <div
      className={`w-full max-w-lg flex flex-row rounded-lg overflow-hidden bg-slate-900 ${
        todo.isDone && "bg-opacity-40"
      }`}
    >
      <input
        type="checkbox"
        className="ml-3"
        checked={todo.isDone}
        onChange={check}
      />
      <input
        type="text"
        className={`w-full px-2 mx-2 bg-transparent text-slate-300 outline-none border-2 ${isEditable ? "border-slate-800" : "border-transparent"} ${todo.isDone && "line-through"} rounded-lg py-2`}
        value={todoText}
        readOnly={!isEditable || todo.isDone}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className={`bg-slate-800 py-2 w-[48px] flex justify-center mr-[1px] ${todo.isDone && "opacity-60"}`}
        onClick={edit}
        disabled={todo.isDone}
      >
        {isEditable ? "📁" : "✏"}
      </button>
      <button
        className="bg-slate-800 py-2 w-[48px] flex justify-center"
        onClick={deleteItem}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}