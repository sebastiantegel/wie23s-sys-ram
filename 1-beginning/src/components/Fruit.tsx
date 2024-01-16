import { Fruit } from "../models/fruit";

export const FruitPresentation = () => {
  const fruits: Fruit[] = [new Fruit("Banan", false), new Fruit("Äpple", true)];

  //   const fruitsHtml: JSX.Element[] = [];
  //   for (let i = 0; i < fruits.length; i++) {
  //     const fruitHtml = (
  //       <div key={fruits[i].name}>
  //         <div className="fruit">{fruits[i].name}</div>
  //         <input
  //           type="checkbox"
  //           checked={fruits[i].isEaten}
  //           onChange={() => {
  //             fruits[i].isEaten = !fruits[i].isEaten;
  //             console.log(fruits);
  //           }}
  //         />
  //       </div>
  //     );
  //     fruitsHtml.push(fruitHtml);
  //   }

  //   const fruitsHtml = fruits.map((f) => {
  //     return (
  //       <div key={f.name}>
  //         <div className="fruit">{f.name}</div>
  //         <input
  //           type="checkbox"
  //           checked={f.isEaten}
  //           onChange={() => {
  //             f.isEaten = !f.isEaten;
  //             console.log(fruits);
  //           }}
  //         />
  //       </div>
  //     );
  //   });

  return (
    <>
      {fruits.map((f) => {
        return (
          <div key={f.name}>
            <div className="fruit">{f.name}</div>
            <input
              type="checkbox"
              checked={f.isEaten}
              onChange={() => {
                f.isEaten = !f.isEaten;
                console.log(fruits);
              }}
            />
          </div>
        );
      })}
    </>
  );
};
