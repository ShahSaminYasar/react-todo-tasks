import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="w-full flex flex-col gap-3 mt-3 items-center">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
