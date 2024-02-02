import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Drinks } from "./pages/Drinks";
import { Home } from "./pages/Home";
import { PagesLayout } from "./pages/PagesLayout";
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
    ],
  },
  {
    path: "/pages",
    element: <PagesLayout />,
    children: [
      {
        path: "/pages/drinks",
        element: <Drinks />,
      },
      {
        path: "/pages/contact",
        element: <Contact />,
      },
    ],
  },
]);
