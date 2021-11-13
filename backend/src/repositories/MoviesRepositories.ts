import { classToPlain } from 'class-transformer';
import { EntityRepository, getConnection, Repository } from "typeorm";
import { Movie } from "~/entities/Movie";

@EntityRepository(Movie)
class MoviesRepositories extends Repository<Movie>{
  async findMovies(idUser: string): Promise<Record<string, any>> {    
    const movies = await getConnection()
      .getRepository(Movie)
      .createQueryBuilder("m")
      .innerJoin("user_movies", "um", "m.id = um.movie_id")
      .innerJoin("users", "u", "u.id = um.user_id")
      .where("u.id = :id", { id: idUser })
      .getMany();

    return classToPlain<Movie[]>(movies);
  }

  async containMovieInUser(idUser: string, idMovie: string): Promise<any> {    
    const movie = await getConnection()
    .getRepository(Movie)
    .createQueryBuilder("m")
    .innerJoin("user_movies", "um", "m.id = um.movie_id")
    .innerJoin("users", "u", "u.id = um.user_id")
    .where("m.id_imdb = :idMovie", { idMovie: idMovie })
    .andWhere("u.id = :id", { id: idUser })
    .getOne();
    
    return movie ? true : false;
  }
}

export { MoviesRepositories }