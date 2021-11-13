import { Movie } from '~/entities/Movie';
import { User } from "~/entities/User";
import { MoviesRepositories } from "~/repositories/MoviesRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "~/repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  id: string;
  name?: string;
}

class UpdateUserService {
  private repository: UsersRepositories;
  private movieRepositories: MoviesRepositories;

  constructor() {
    this.repository = getCustomRepository(UsersRepositories);
    this.movieRepositories = getCustomRepository(MoviesRepositories);
  }

  async update({ id, name }: IUserRequest): Promise<boolean> {
    try {
      const user = await this.repository.findOne({
        id,
      });

      if (name) user.name = name;

      await this.repository.save(user);

      return true;
    } catch (error) {
      throw new Error("Error update user!");
    }
  }
  async updatePassword(id: string, password: string): Promise<boolean> {
    try {
      const user = await this.repository.findOne({
        id,
      });

      user.password = await hash(password, 8);
      await this.repository.save(user);

      return true;
    } catch (error) {
      throw new Error("Error update user!");
    }
  }

  async updateLogin(id: string, login: string): Promise<boolean> {
    try {
      const user = await this.repository.findOne({
        id,
      });

      user.login = login;
      await this.repository.save(user);
      return true;
    } catch (error) {
      throw new Error("Error update user!");
    }
  }
  async addMovie(userId: string, movieId: string): Promise<any> {
    try {
      const user = await this.repository.findOne({ id: userId }, { relations: ["movies"] });

      const movie = await this.movieRepositories.findOne({
        idimdb: movieId,
      });

      user.movies.push(movie);     

      await this.repository.save(user);

      return user;
    } catch (error) {
      throw new Error("Error update movie in user!" + error);
    }
  }

  async removeMovie(userId: string, movieId: string) {
    try {
      const user = await this.repository.findOne({ id: userId }, { relations: ["movies"] });

      const movieToRemove = await this.movieRepositories.findOne({
        idimdb: movieId,
      });
      
      user.movies = user.movies.filter((movie) => {
        return movie.idimdb !== movieToRemove.idimdb;
      });

      await this.repository.save(user);

      return user;
    } catch (error) {
      throw new Error("Error remove movie in user!" + error);
    }
  }
}

export { UpdateUserService };
