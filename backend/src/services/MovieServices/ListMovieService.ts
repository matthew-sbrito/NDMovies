import { classToPlain } from 'class-transformer';
import { UsersRepositories } from '~/repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';
import { MoviesRepositories } from '~/repositories/MoviesRepositories';

class ListMovieService{
  
  private repository: MoviesRepositories;
  private userRepository: UsersRepositories;
  
  constructor(){
    this.repository = getCustomRepository(MoviesRepositories)
    this.userRepository = getCustomRepository(UsersRepositories)
  }

  async findAll(){
    try {
      const movies = await this.repository.find();
      return classToPlain(movies);
    } catch (error) {
      throw new Error('Error fetching movies!');
    }
  }

  async findByUser(idUser: string){
    try {
      const movies = await this.userRepository.findMovies(idUser);
      return movies;
    } catch (error) {
      throw new Error('Error fetching movies!');
    }
  }
}

export { ListMovieService }