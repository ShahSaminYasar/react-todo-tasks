import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
