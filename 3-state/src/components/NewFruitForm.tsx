import { ChangeEvent, FormEvent, useState } from "react";
import { Fruit } from "../models/Fruit";

export const NewFruitForm = () => {
  const [newFruit, setNewFruit] = useState<Fruit>(new Fruit("", "", false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name; // "name | type | isEaten"
    if (e.target.type === "text") {
      setNewFruit({ ...newFruit, [propertyName]: e.target.value });
    }
    if (e.target.type === "checkbox") {
      setNewFruit({ ...newFruit, [propertyName]: e.target.checked });
    }
  };

  //   const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setNewFruit({ ...newFruit, type: e.target.value });
  //   };

  //   const handleEatenChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setNewFruit({ ...newFruit, isEaten: e.target.checked });
  //   };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    console.log(newFruit);
  };

  return (
    <>
      <div>{JSON.stringify(newFruit)}</div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={newFruit.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          value={newFruit.type}
          onChange={handleChange}
          name="type"
        />
        <input
          type="checkbox"
          checked={newFruit.isEaten}
          onChange={handleChange}
          name="isEaten"
        />
        <button>Spara</button>
      </form>
    </>
  );
};
