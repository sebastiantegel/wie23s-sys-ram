import { useEffect, useState } from "react";
import { IDrink } from "../models/IDrink";
import axios from "axios";
import { IDrinkApiResponse } from "../models/IDrinkApiResponse";

export const Drinks = () => {
  const [drinks, setDrinks] = useState<IDrink[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<IDrinkApiResponse>(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );

      if (shouldUpdate) {
        setDrinks(response.data.drinks);
      }
    };

    let shouldUpdate = true;

    if (!drinks) {
      getData();
    }

    return () => {
      shouldUpdate = false;
    };
  });

  return (
    <div className="drinks">
      {drinks?.map((drink) => (
        <div key={drink.idDrink} className="drink">
          <h3>{drink.strDrink}</h3>
          <pre>Serveras i: {drink.strGlass}</pre>
          <div className="img-container">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
          <p>{drink.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};
