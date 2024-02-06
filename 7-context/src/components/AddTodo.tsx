import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { add } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(userInput);
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button>Spara</Button>
    </form>
  );
};
