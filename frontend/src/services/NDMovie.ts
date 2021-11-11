import { findDetailsById } from './IMDb';
import api from "./api";

class MovieServices {

  addMovie = async (item: any): Promise<any> => {
    
    const movie = await findDetailsById(item.id);
    const description =  movie.plotSummary.text;

    const data = { 
      idimdb: item.id,
      title: item.l,
      description,
      image: item.i.imageUrl,
    };
    
    const response = await api.post('/movies', data);
    const json = response.data;
    
    return json;
  }

  addMovieInUser = async (item: any): Promise<any> => {
    
    const response = await api.post('movie');
    const json = response.data;
    
    return json;
  }

  removeMovieInUser = async (item: any): Promise<any> => {

    const response = await api.delete('movie');
    const json = response.data;
    
    return json;
  }
}

export { MovieServices }