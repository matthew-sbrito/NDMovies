import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { MoviesRepositories } from "~/repositories/MoviesRepositories";

interface MovieRequest {
  idIMDb: string;
  title: string;
  description: string;
  image: string;
}

class CreateMovieService {
   async execute({ idIMDb, title, description, image }: MovieRequest) {

    const moviesRepositories = getCustomRepository(MoviesRepositories);

    const movieExists = await moviesRepositories.findOne({
      idimdb: idIMDb
    })

    if(movieExists){
      return classToPlain(movieExists);
    }

    const movie = moviesRepositories.create({
      idimdb: idIMDb,
      title,
      description,
      image
    });

    await moviesRepositories.save(movie);

    return classToPlain(movie);
  }
}

export { CreateMovieService };
