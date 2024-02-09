import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { IUserContext, UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<IUserContext>({
    name: "Sebastian",
    email: "sebastian.tegel@tegelconsulting.se",
    avatar: "http://somerandomimage.png",
  });

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  );
}

export default App;
