import { Request, Response } from "express";
import { ListMovieService } from "~/services/MovieServices/ListMovieService";

class MovieController{
  async findAll(request: Request, response: Response): Promise<Response<string>>{
  
    const listMovieService = new ListMovieService();

    const movies = await listMovieService.findAll();

    return response.json({ movies });

  }
  async findAllByUser(request: Request, response: Response): Promise<Response<string>>{
    const id = request.query.id;

    const listMovieService = new ListMovieService();

    const movies = await listMovieService.findByUser(`${id}`);

    return response.json({ movies });

  }
}

export { MovieController }