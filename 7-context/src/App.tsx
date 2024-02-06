import { useContext } from "react";
import "./App.css";
// import { AwesomeComponent } from "./components/AwesomeComponent";
// import { MyContext } from "./contexts/MyContext";
import { TodoApp } from "./components/TodoApp";
import { ThemeContext } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

function App() {
  // const [myText, setMyText] = useState("dolor sit amet");
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <Button handleClick={currentTheme.toggleTheme}>Ändra tema</Button>
      {/* <Button handleClick={() => {}}>Hej</Button> */}
      {/* <button onClick={() => setMyText("Wohoooo!!")}>Ändra texten</button>

      <MyContext.Provider value={myText}>
        <AwesomeComponent />
      </MyContext.Provider> */}
      <TodoApp />{" "}
    </>
  );
}

export default App;
