import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieExt } from "../models/IMovieExt";
import axios from "axios";

export const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovieExt>();

  const { movieId } = useParams();

  if (!movie) {
    axios
      .get<IMovieExt>("http://omdbapi.com?apikey=416ed51a&i=" + movieId)
      .then((response) => {
        setMovie(response.data);
      });
  }

  return (
    <>
      <h3>{movie?.Title}</h3>
      <p>{movie?.Plot}</p>
      <span>{movie?.Actors}</span>
      <img src={movie?.Poster} />
    </>
  );
};
