import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const getMovies = async (title: string = "star") => {
  const response = await axios.get<IOmdbResponse>(
    `https://omdbapi.com/?apikey=416ed51a&s=${title}`
  );

  return response.data.Search;
};
