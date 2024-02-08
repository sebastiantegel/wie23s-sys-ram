import { useReducer } from "react";
import { ActionType, TodoReducer } from "../reducers/TodoReducer";
import { Todo } from "../models/Todo";

export const TodoApp = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [new Todo(1, "Learn something", false)],
    userInput: "",
  });

  const handleClick = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ActionType.ADDED,
            payload: state.userInput,
          });
          dispatch({ type: ActionType.TYPED, payload: "" });
        }}
      >
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: ActionType.TYPED, payload: e.target.value })
          }
        />
        <button>Spara</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.done ? "done" : ""}
            onClick={() => handleClick(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};
