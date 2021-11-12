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
): Promise<ISearchRequest | undefined> => {
  try {
    const response = await api.get("auto-complete", {
      params: { q: search },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findMovieById = async (id: string): Promise<any> => {
  try {
    const response = await api.get("title/get-details", {
      params: { tconst: id },
    });
    const movie = response.data;
    
    const details = await findDetailsById(id);
    const description =  details.plotSummary;

    return { ...movie, description};
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


export const findMovieRandom = async (): Promise<any> => {
  const response = await api.get("/title/get-most-popular-movies");
  const moviesId = response.data.map((movie: string) =>
  movie.replace("/title/", "").replace("/", "")
  );
  
  const randomMovie = chooseRandom();
  
  let idMovie = randomMovie(moviesId);
  
  const movie = await findMovieById(idMovie);
  return movie;
};

export default api;

// const getData = async (endpoint: string): Promise<any> => {
//   const response = await api.get(endpoint);
//   const moviesId = response.data.map((movie: string) =>
//     movie.replace("/title/", "").replace("/", "")
//   );

//   let randomIdMovies: any[] = [];
//   const randomMovie = chooseRandom();

//   let chosenMovie = randomMovie(moviesId);
//   randomIdMovies.push(chosenMovie);

//   const movies = randomIdMovies.map(async (idMovie: string) => {
//     const movie = await findMovieById(idMovie);
//     return movie;
//   });

//   return movies;
// };