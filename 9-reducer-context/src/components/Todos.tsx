import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { ActionType } from "../reducers/TodoReducer";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ""}>
          {todo.text}
          <button
            onClick={() =>
              dispatch({
                type: ActionType.TOGGLED,
                payload: todo.id.toString(),
              })
            }
          >
            {todo.done ? "Gör oklar" : "Gör klar"}
          </button>
          <button
            onClick={() =>
              dispatch({
                type: ActionType.REMOVED,
                payload: todo.id.toString(),
              })
            }
          >
            Ta bort
          </button>
        </li>
      ))}
    </ul>
  );
};
