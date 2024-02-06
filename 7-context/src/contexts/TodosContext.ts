import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  add: (text: string) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  toggleTodo: () => {},
  add: () => {},
});
