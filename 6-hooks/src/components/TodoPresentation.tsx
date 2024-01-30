import { Todo } from "../models/Todo";

interface ITodoPresentationProps {
  task: Todo;
  changeTodo: (id: number) => void;
}

export const TodoPresentation = (props: ITodoPresentationProps) => {
  return (
    <li
      className={props.task.done ? "done" : ""}
      onClick={() => {
        props.changeTodo(props.task.id);
      }}
    >
      {props.task.text}
    </li>
  );
};
