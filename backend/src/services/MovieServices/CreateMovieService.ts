import { getCustomRepository } from 'typeorm';
import { MoviesRepositories } from "~/repositories/MoviesRepositories";

interface IMovieRequest {
  idIMDb: string;
  title: string;
  description: string;
  image: string;
}

class CreateMovieService {
   async execute({ idIMDb, title, description, image }: IMovieRequest) {

    const moviesRepositories = getCustomRepository(MoviesRepositories);

    const movie = moviesRepositories.create({
      idIMDb,
      title,
      description,
      image
    });

    await moviesRepositories.save(movie);

    return movie;
  }
}

export { CreateMovieService };
