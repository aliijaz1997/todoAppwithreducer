import { useReducer, useState } from "react";
import "./App.css";
import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";
import { initialState, reducer } from "./reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  function handleAddTodo(todoData) {
    dispatch({
      type: "ADD_TODO",
      title: todoData.title,
      description: todoData.description,
      done: todoData.done,
    });
  }

  return (
    <div className="container">
      <TodoForm handleAddTodo={handleAddTodo} />

      {state.todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;
