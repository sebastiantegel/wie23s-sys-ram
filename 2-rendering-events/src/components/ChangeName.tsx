import { useState } from "react";

export const ChangeName = () => {
  //   let name = "Sebastian";
  const [name, setName] = useState("Sebastian");

  const changeName = () => {
    // name = "Hanna";
    setName("Hanna");

    console.log(name);
  };

  return (
    <>
      <div onClick={changeName}>{name}</div>
    </>
  );
};
