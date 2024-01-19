import { useState } from "react";
import { Fruit } from "../models/Fruit";

export const ShowFruit = () => {
  const [fruit, setFruit] = useState<Fruit>(new Fruit("Äpple", "Frukt", false));

  const handleClick = () => {
    setFruit({ ...fruit, isEaten: !fruit.isEaten });
  };

  return (
    <>
      <h3>{fruit?.name}</h3>
      <input type="checkbox" checked={fruit?.isEaten} disabled />
      <button onClick={handleClick}>{fruit.isEaten ? "Köp ny" : " Ät"}</button>
    </>
  );
};
