import { Movie } from "../entities/Movie";
import api from "./api";
import * as imdb from "./IMDb";

class MovieServices {

  constructor(){
    const jwt = localStorage.getItem("@RAuth:token") ?? '';
    const { token } =  JSON.parse(jwt);

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
  addMovie = async (item: any): Promise<any> => {

    let id: string = item.idimdb ?? item.id;
    id = id.replace("/title/", "").replace("/", "");
    const data = {
      id: id,
      title: item.title,
      description: item.description,
      image: item.image,
    };

    const response = await api.post("/movies", data);
    const json = response.data;
    return json;
  };

  removeMovieInUser = async (item: any): Promise<any> => {
    let id: string = item.idimdb ?? item.id;
    id = id.replace("/title/", "").replace("/", "");

    const response = await api.delete("/movies/" + id);
    const json = response.data;

    return json;
  };

  containsInUser = async (movieId: string): Promise<any> => {
    if (!movieId) return;

    const id = movieId.replace("/title/", "").replace("/", "");
    const response = await api.get("/contains/movies", {
      params: { movie: id },
    });

    const { contains } = response.data;

    return contains;
  };

  getMovie = async (movieId: string): Promise<Movie> => {
    const id = movieId.replace("/title/", "").replace("/", "");

    const response = await api.get(`/movies/${id}`);

    let { movie } = response.data;

    if (!movie) {
      movie = await imdb.findMovieById(id);
      if (movie) {
        return {
          idimdb: movie.id ?? "",
          title: movie.title ?? "",
          description: movie.description ? movie.description.text : "",
          image: movie.image?.url ?? "",
        };
      }
    }

    return movie;
  };

  findAllCatalogs = async (): Promise<any> => {

    const response = await api.get("/user/movies");

    const { movies } = response.data;

    return movies;
  };
}

export { MovieServices };
