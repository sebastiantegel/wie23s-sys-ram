import { useMemo, useState } from "react";
import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(Date.now(), "Learn react", false),
    new Todo(Date.now() + 1, "Learn useEffect", false),
    new Todo(Date.now() + 2, "Learn useMemo", false),
    new Todo(Date.now() + 3, "Learn TS", false),
  ]);
  const [dummyState, setDummyState] = useState(false);

  const visibleTodos = useMemo(() => {
    console.log("Doing the filtering");
    return todos.filter((todo) => !todo.done);
  }, [todos]);

  const setTodoAsDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <button onClick={() => setDummyState(!dummyState)}>Dummy button</button>
      <ul>
        {visibleTodos.map((todo) => (
          <TodoPresentation
            key={todo.id}
            task={todo}
            changeTodo={setTodoAsDone}
          />
        ))}
      </ul>
    </>
  );
};
