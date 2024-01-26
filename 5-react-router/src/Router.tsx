import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
]);
