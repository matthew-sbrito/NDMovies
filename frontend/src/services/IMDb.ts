import axios from 'axios';

axios.defaults.headers.common['x-rapidapi-key'] = process.env.NDMOVIES_RAPID_APPKEY ?? '';

const baseUrl = process.env.NDMOVIES_IMDB_BASEURL;

export const getMovies = async (endpoint: string): Promise<any> => {
  
  const url = `${baseUrl}/${endpoint}`;
  const response = await axios.get(url);
  const json = response.data;

  return json;
}