import { Link } from "react-router-dom";
import "./../styles/hero.scss";

export const Layout = () => {
  return (
    <>
      <main>Hero</main>
      <section>
        <Link to={"/pages/drinks"}>Vårt utbud</Link>
      </section>
    </>
  );
};
