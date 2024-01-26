import { useState } from "react";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { MoviePresentation } from "../components/MoviePresentation";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  if (!movies) {
    axios
      .get<IOmdbResponse>("http://omdbapi.com?apikey=416ed51a&s=star")
      .then((response) => {
        setMovies(response.data.Search);
      });
  }

  return (
    <>
      {movies?.map((movie) => {
        return <MoviePresentation key={movie.imdbID} movie={movie} />;
      })}
    </>
  );
};
