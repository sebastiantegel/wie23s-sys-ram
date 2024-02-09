import { useContext, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { UserContext } from "../contexts/UserContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const user = useContext(UserContext);

  return (
    <>
      <h3>Välkommen {user.name}</h3>
      <TodosContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};
