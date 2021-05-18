import React, { useContext } from "react";
import "./App.css";
import { todoContext } from "./contextApi";
import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";

function App() {
  const { handleAddTodo, state } = useContext(todoContext);

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
