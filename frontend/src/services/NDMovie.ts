import { Movie } from "../entities/Movie";
import api from "./api";
import * as imdb from "./IMDb";

class MovieServices {

  constructor(){
    const jwt = localStorage.getItem("@RAuth:token");
    if (jwt) {
    const { token } = JSON.parse(jwt!);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
  addMovie = async (movie: Movie): Promise<any> => {

    const response = await api.post("/movies", movie);
    const json = response.data;
    return json;
  };

  removeMovieInUser = async (movie: Movie): Promise<any> => {

    const response = await api.delete(`/movies/${movie.idimdb}`);
    const json = response.data;

    return json;
  };

  containsInUser = async ({ idimdb }:Movie): Promise<any> => {
    const response = await api.get("/contains/movies", {
      params: { movie: idimdb },
    });

    const { contains } = response.data;

    return contains;
  };

  getMovie = async (idimdb: string ): Promise<Movie | undefined> => {
    try {
      const response = await api.get(`/movies/${idimdb}`);
      const movie = response.data.movie;
      if (movie) {
        return movie;
      }
    } catch (error) {
      console.error(error);      
    }

    return await imdb.findMovieById(idimdb);
  };

  findAllCatalogs = async (): Promise<Movie[]> => {

    const response = await api.get("/user/movies");

    const { movies } = response.data;

    return movies;
  };
}

export { MovieServices };
