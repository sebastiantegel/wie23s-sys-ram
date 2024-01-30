import { useEffect, useState } from "react";
import "./App.scss";
import { IMovie } from "./models/IMovie";
import { getMovies } from "./services/movieService";
import { Todos } from "./components/Todos";

function App() {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    // Om movies är ett värde ([] | [{}]) avbryt denna useEffect
    if (movies) return;

    const getData = async () => {
      const omdbMovies = await getMovies();

      // Om användaren är kvar och komponenten visas så är shouldUpdate true
      // och vi uppdaterar vårt state.
      // Om användaren inte är kvar så är shouldUpdate false och vi uppdaterar
      // inte vårt state
      if (shouldUpdate) {
        setMovies(omdbMovies);
      }
    };

    // Denna variabel har som syfte att bestämma om state
    // movies skall ändras eller inte
    let shouldUpdate = true;

    getData();

    return () => {
      // Om vi kommer hit, har vår komponent försvunnit (visas inte).
      // Vi kan därför inte heller uppdatera state movies (för det finns inte)
      shouldUpdate = false;
    };
  });

  return (
    <>
      <p>{movies?.length}</p>

      <Todos />
    </>
  );
}

export default App;
