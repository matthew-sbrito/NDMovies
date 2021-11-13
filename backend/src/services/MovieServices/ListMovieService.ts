import { classToPlain } from 'class-transformer';
import { UsersRepositories } from '~/repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';
import { MoviesRepositories } from '~/repositories/MoviesRepositories';

class ListMovieService{
  
  private repository: MoviesRepositories;
  
  constructor(){
    this.repository = getCustomRepository(MoviesRepositories);
  }

  async findAll(){
    try {
      const movies = await this.repository.find();
      return classToPlain(movies);
    } catch (error) {
      throw new Error('Error fetching movies!');
    }
  }
 
  async findOne(id: string){
    try {
      const movie = await this.repository.findOne({
        idimdb: id,
      });
      return classToPlain(movie);
    } catch (error) {
      throw new Error('Error fetching movies!');
    }
  }

  async findByUser(idUser: string){   
    try {
      const movies = await this.repository.findMovies(idUser);
      return movies;
    } catch (error) {
      throw new Error('Error fetching movies!' + error);
    }
  }

  async containsInUser(idUser: string, idMovie: string): Promise<boolean> {
    const bool = await this.repository.containMovieInUser(idUser, idMovie);

    return bool;
  }
}

export { ListMovieService }