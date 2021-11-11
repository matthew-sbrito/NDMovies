import { classToPlain } from 'class-transformer';
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

    const movieExists = await moviesRepositories.findOne({
      idIMDb
    })

    if(movieExists){
      return classToPlain(movieExists);
    }

    const movie = moviesRepositories.create({
      idIMDb,
      title,
      description,
      image
    });

    await moviesRepositories.save(movie);

    return classToPlain(movie);
  }
}

export { CreateMovieService };
