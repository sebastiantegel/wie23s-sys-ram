import { ChangeEvent, FormEvent } from "react";

export const Events = () => {
  //   const handleClick = () => {
  //     console.log("Klickade på knappen");
  //   };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submit form");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      {/* <button onClick={handleClick}>Klicka här</button> */}
      <button>Spara</button>
    </form>
  );
};
