import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  TOGGLED,
  ADDED,
  TYPED,
}

export interface ITodoReducer {
  todos: Todo[];
  userInput: string;
}

export const TodoReducer = (state: ITodoReducer, action: IAction) => {
  //   const toggleTodo = (id: number) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, done: !todo.done } : todo
  //       )
  //     );
  //   };

  //   const addTodo = (text: string) => {
  //     setTodos([...todos, new Todo(Date.now(), text, false)]);
  //   };

  //   if (action.type === ActionType.TOGGLED) {
  //     return todos.map((todo) =>
  //       todo.id === +action.payload ? { ...todo, done: !todo.done } : todo
  //     );
  //   }
  //   else if (action.type === ActionType.ADDED) {
  //     return [...todos, new Todo(Date.now(), action.payload, false)];
  //   }

  //   return todos;

  switch (action.type) {
    case ActionType.TOGGLED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === +action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    case ActionType.ADDED:
      return {
        ...state,
        todos: [...state.todos, new Todo(Date.now(), action.payload, false)],
      };

    case ActionType.TYPED:
      return { ...state, userInput: action.payload };

    default:
      return state;
  }
};
