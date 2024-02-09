import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  TOGGLED,
  REMOVED,
}

export const TodoReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(Date.now(), action.payload, false)];

    case ActionType.TOGGLED:
      return todos.map((todo) =>
        todo.id === +action.payload ? { ...todo, done: !todo.done } : todo
      );

    case ActionType.REMOVED:
      return todos.filter((todo) => todo.id !== +action.payload);

    default:
      return todos;
  }
};
