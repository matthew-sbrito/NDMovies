import { MoviesRepositories } from "~/repositories/MoviesRepositories";
import { getCustomRepository } from "typeorm";

interface IMovieRequest {
  id: string;
  title?: string;
  description?: string;
  image?: string;
}

class UpdateMovieService {
  async update({
    id,
    title,
    description,
    image,
  }: IMovieRequest): Promise<boolean> {
    const moviesRepositories = getCustomRepository(MoviesRepositories);

    try {
      const movie = await moviesRepositories.findOne({
        id,
      });

      if (title) movie.title = title;
      if (description) movie.description = description;
      if (image) movie.image = image;

      await moviesRepositories.save(movie);

      return true;
    } catch (error) {
      throw new Error("Error update user!");
    }
  }
}

export { UpdateMovieService };
