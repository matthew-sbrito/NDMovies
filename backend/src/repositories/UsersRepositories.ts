import { Movie } from "~/entities/Movie";
import { classToPlain } from "class-transformer";
import { getConnection } from "typeorm";
import { User } from "~/entities/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {
  async findMovies(idUser: string): Promise<Record<string, any>> {
    const movies = await getConnection()
      .createQueryBuilder()
      .leftJoinAndSelect("users.movies", "movies")
      .where("user.id = :id", { id: idUser })
      .getMany();

    return classToPlain<Movie[]>(movies);
  }
}

export { UsersRepositories };
