import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_IMDB_BASEURL,
})

api.defaults.headers.common['x-rapidapi-key'] = process.env.REACT_APP_RAPID_APPKEY ?? '';

interface ISearchRequest{
  d: any[];
  q: string,
  v: number,
}

export const findMovieSearch = async (search: string): Promise<ISearchRequest | undefined > => {
  try {
    const response = await api.get('auto-complete',{
      params: {q: search}
    })
    return response.data;
  } catch (error) {
    console.error(error);    
  }
}

export const findMovieById = async (id: string): Promise<any> => {
  try {
    const response = await api.get('title/get-details',{
      params: {tconst: id}
    })
    return response.data;
  } catch (error) {
    console.error(error);    
  }
}

export const findDetailsById = async (id: string): Promise<any> => {
  try {
    const response = await api.get('title/get-overview-details',{
      params: {
        tconst: id, 
        currentCountry: 'PT'
      }
    })
    return response.data; 
  } catch (error) {
    console.error(error);    
  }
}

export const findMoviesCategory = async (): Promise<any> => {
  try {
    
  } catch (error) {
    
  }
}

export default api;
