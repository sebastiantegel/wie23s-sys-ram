import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos, toggleTodo } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.done ? "done" : ""}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
