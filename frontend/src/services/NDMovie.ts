import api from "./api";

class MovieServices {
  addMovie = async (item: any): Promise<any> => {
    const data = {
      title: item.title,
      idimdb: item.id.replace("/title/", "").replace("/", ""),
      description: item.description?.text ?? '',
      image: item.image.url,
    };

    const response = await api.post("/movies", data);
    console.log(response.statusText);
    
    const json = response.data;
    console.log(json);

    return json;
  };

  removeMovieInUser = async (item: any): Promise<any> => {
    const response = await api.delete("movie");
    const json = response.data;

    return json;
  };

  containsInUser = async (movieId: string): Promise<any> =>{

    const id = movieId.replace("/title/", "").replace("/", "");
  
    const response = await api.get('/movies/contains',{
      params: { movie: id}
    });
  
    const { contains } = response.data;
  
    return contains;
  }
}

export { MovieServices };
