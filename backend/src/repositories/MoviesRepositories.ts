import { User } from '~/entities/User';
import { classToPlain } from 'class-transformer';
import { EntityRepository, getConnection, Repository } from "typeorm";
import { Movie } from "~/entities/Movie";

@EntityRepository(Movie)
class MoviesRepositories extends Repository<Movie>{
  async findMovies(idUser: string): Promise<Record<string, any>> {    
    const movies = await getConnection()
      .getRepository(Movie)
      .createQueryBuilder()
      .innerJoin("user_movies", "um")
      .where("um.user_id = :id", { id: idUser })
      .getMany();
          
    return classToPlain<Movie[]>(movies);
  }

  async containMovieInUser(idUser: string, idMovie: string): Promise<boolean> {    
    const movies = await getConnection()
      .getRepository(Movie)
      .createQueryBuilder()
      .innerJoin("user_movies", "um")
      .where("um.user_id = :idUser", { idUser })
      .andWhere("id_imdb = :idMovie", { idMovie })
      .getMany();
          
    return movies.length ? true : false;
  }
}

export { MoviesRepositories }