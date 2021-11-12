import { UpdateUserService } from '~/services/UserServices/UpdateUserService';
import { Request, response, Response } from "express";
import { CreateMovieService } from "~/services/MovieServices/CreateMovieService";
import { ListMovieService } from "~/services/MovieServices/ListMovieService";

class MovieController {
  async findAll(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const listMovieService = new ListMovieService();

    const movies = await listMovieService.findAll();

    return response.json({ movies });
  }
  async findAllByUser(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const id = request.user_id;

    const listMovieService = new ListMovieService();

    const movies = await listMovieService.findByUser(`${id}`);

    return response.json({ movies });
  }

  async create(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { title, idimdb, description, image } = request.body;

    const { user_id } = request;

    const createMovieService = new CreateMovieService();

    const movie = await createMovieService.execute({
      idIMDb: idimdb,
      title,
      description,
      image,
    });

    const updateUserService = new UpdateUserService();
    
    const movies = await updateUserService.addMovie(user_id, movie.id);  
    
    return response.json({ movies });
  }

  async addMovieInUser(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    
    const { user_id } = request;

    const { movieId } = request.params;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.addMovie(user_id, movieId);  
    
    return response.json({ user });
  }

  async removeMovieInUser(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    
    const { user_id } = request;

    const { movieId } = request.params;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.removeMovie(user_id, movieId);  
    
    return response.json({ user });
  }

  async containUser(request: Request, response: Response): Promise<Response<string>>{
    
    const { user_id } = request;

    const { movie } = request.query;

    if(!movie){
      return response.status(404).json({ error: 'ID Movie is required!'})
    }
    
    const contains = await new ListMovieService().containsInUser(user_id, `${movie}`);    

    return response.json({ contains })
  }
}

export { MovieController };
