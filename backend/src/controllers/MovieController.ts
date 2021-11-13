import { UpdateUserService } from '~/services/UserServices/UpdateUserService';
import { Request, Response } from "express";
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
  async findOne(
    request: Request,
    response: Response
  ): Promise<Response<string>> {

    const { id } = request.params;

    const listMovieService = new ListMovieService();

    const movie = await listMovieService.findOne(id);

    return response.json({ movie });
  }
  async findAllByUser(request: Request, response: Response ): Promise<Response<string>> {
    const { user_id } = request;

    const listMovieService = new ListMovieService();

    const movies = await listMovieService.findByUser(`${user_id}`);

    return response.json({ movies });
  }

  async create(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { title, id, description, image } = request.body;

    const { user_id } = request;

    const createMovieService = new CreateMovieService();

    const movie = await createMovieService.execute({
      idIMDb: id,
      title,
      description,
      image,
    });   

    
    const updateUserService = new UpdateUserService();
    
    const movies = await updateUserService.addMovie(user_id, movie.idimdb);  
    
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

    const { id } = request.params;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.removeMovie(user_id, id);  
    
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
