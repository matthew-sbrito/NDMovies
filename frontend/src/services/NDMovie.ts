import api from "./api";

class MovieServices {

  addMovie = async (): Promise<any> => {
    
    const response = await api.post('movie');
    const json = response.data;
    
    return json;
  }
}

export { MovieServices }