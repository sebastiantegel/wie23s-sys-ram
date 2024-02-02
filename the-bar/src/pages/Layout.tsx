import { Link } from "react-router-dom";
import "./../styles/hero.scss";

export const Layout = () => {
  return (
    <>
      <main className="hero">Hero</main>
      <section>
        <Link to={"/pages/drinks"}>Vårt utbud</Link>
      </section>
    </>
  );
};
