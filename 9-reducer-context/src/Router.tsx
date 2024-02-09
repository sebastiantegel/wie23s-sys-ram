import { createBrowserRouter } from "react-router-dom";
import { TodoApp } from "./components/TodoApp";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/todos",
        element: <TodoApp />,
      },
    ],
  },
]);
