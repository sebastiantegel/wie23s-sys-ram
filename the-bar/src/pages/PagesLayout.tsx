import { NavLink, Outlet } from "react-router-dom";
import "./../styles/main.scss";

export const PagesLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/pages/drinks"}>Drycker</NavLink>
            </li>
            <li>
              <NavLink to={"/pages/contact"}>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; {new Date().getFullYear()} - Tegel Consulting</footer>
    </>
  );
};
