import { useState } from "react";
import { Fruit } from "../models/Fruit";

export const Fruits = () => {
  const [fruits, setFruits] = useState<Fruit[]>([
    new Fruit("Banan", "Bär", false),
    new Fruit("Äpple", "Frukt", false),
  ]);

  const handleClick = (name: string) => {
    console.log(name);

    console.log(fruits);

    console.log(
      fruits.map((f) => {
        if (f.name === name) {
          return { ...f, isEaten: !f.isEaten };
        } else {
          return f;
        }
      })
    );

    setFruits(
      fruits.map((f) => {
        if (f.name === name) {
          return { ...f, isEaten: !f.isEaten };
        } else {
          return f;
        }
      })
    );
  };

  const addFruit = () => {
    setFruits([...fruits, new Fruit("Päron", "Frukt", true)]);
  };

  const removeFruit = (name: string) => {
    console.log(name);

    console.log(fruits);
    console.log(fruits.filter((f) => f.name !== name));
    setFruits(fruits.filter((f) => f.name !== name));
  };

  return (
    <>
      <button onClick={addFruit}>Lägg till</button>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.name}>
            <h3>{fruit?.name}</h3>
            <input type="checkbox" checked={fruit?.isEaten} disabled />
            <button
              onClick={() => {
                handleClick(fruit.name);
              }}
            >
              {fruit.isEaten ? "Köp ny" : " Ät"}
            </button>
            <button
              onClick={() => {
                removeFruit(fruit.name);
              }}
            >
              Ta bort
            </button>
          </div>
        );
      })}
    </>
  );
};
