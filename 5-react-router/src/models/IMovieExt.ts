import { IMovie } from "./IMovie";

interface IRating {
  source: string;
  value: string;
}

export interface IMovieExt extends IMovie {
  Actors: string;
  Ratings: IRating[];
  Director: string;
  Plot: string;
  Poster: string;
}
