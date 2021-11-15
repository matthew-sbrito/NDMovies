import { Movie } from "../entities/Movie";
import axios from "axios";
import { chooseRandom } from "../utils/chooseRandom";

const api = axios.create({
  baseURL: process.env.REACT_APP_IMDB_BASEURL,
});

api.defaults.headers.common["x-rapidapi-key"] =
  process.env.REACT_APP_RAPID_APPKEY ?? "";

interface ISearchRequest {
  d: any[];
  q: string;
  v: number;
}

export const findMovieSearch = async (
  search: string
): Promise<Movie[] | undefined> => {
  try {
    const response = await api.get("auto-complete", {
      params: { q: search },
    });

    return transformMovies(response.data);
  } catch (error) {
    console.error(error);
  }
};

const transformMovies = ({ d }: ISearchRequest): Movie[] => {
  const movies = d.map((movie: any): Movie => {
    return {
      idimdb: movie.id,
      title: movie.l,
      description: '',
      image: movie.i.imageUrl,
    };
  });
  return movies;
};

export const findMovieById = async (id: string): Promise<Movie | undefined> => {
  try {
    const response = await api.get("title/get-details", {
      params: { tconst: id },
    });
    const movie = response.data;

    const details = await findDetailsById(id);
    const description = details.plotSummary?.text;

    return new Movie({
      idimdb: movie.id,
      title: movie.title,
      description: description,
      image: movie.image.url,
    });
  } catch (error) {
    console.error(error);
  }
};

export const findDetailsById = async (id: string): Promise<any> => {
  try {
    const response = await api.get("title/get-overview-details", {
      params: {
        tconst: id,
        currentCountry: "PT",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findMoviesCategory = async (): Promise<any> => {
  try {
  } catch (error) {}
};

export const findMovieRandom = async (): Promise<Movie | undefined> => {
  const response = await api.get("/title/get-most-popular-movies");
  const moviesId = response.data.map((movie: string) =>
    movie.replace("/title/", "").replace("/", "")
  );

  const randomMovie = chooseRandom();

  let idMovie = randomMovie(moviesId);
  
  const movie = await findMovieById(idMovie);

  return movie ? movie : findMovieRandom();
};

export default api;
