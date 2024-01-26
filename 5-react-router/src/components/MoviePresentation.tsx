import { Link, useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";

interface IMoviePresentationProps {
  movie: IMovie;
}

export const MoviePresentation = ({ movie }: IMoviePresentationProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} />
      <button
        onClick={() => {
          navigate("/movie/" + movie.imdbID);
        }}
      >
        Visa mer
      </button>
      {/* <Link to={"/movie/" + movie.imdbID}>Läs mer</Link> */}
    </div>
  );
};
