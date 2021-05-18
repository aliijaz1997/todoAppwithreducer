import React, { createContext } from "react";
import { reducer } from "./reducer";
import { useReducer } from "react";

export const todoContext = createContext();

function TodoProvider({ children }) {
  const initialState = {
    todos: [
      {
        id: 1,
        title: "Learn javascript",
        description: "lorem ipsum",
        done: true,
      },
      {
        id: 2,
        title: "Learn typescript",
        description: "lorem ipsum",
        done: false,
      },
    ],
  };

  function handleAddTodo(todoData) {
    dispatch({
      type: "ADD_TODO",
      title: todoData.title,
      description: todoData.description,
      done: todoData.done,
    });
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <todoContext.Provider value={{ initialState, handleAddTodo, state }}>
      {children}
    </todoContext.Provider>
  );
}

export default TodoProvider;
