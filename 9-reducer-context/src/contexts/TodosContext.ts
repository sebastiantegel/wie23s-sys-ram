import { Dispatch, createContext } from "react";
import { Todo } from "../models/Todo";
import { IAction } from "../reducers/TodoReducer";

export interface ITodosContext {
  todos: Todo[];
  dispatch: Dispatch<IAction>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  dispatch: () => {},
});
