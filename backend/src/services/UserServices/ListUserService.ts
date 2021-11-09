import { FindManyOptions, getCustomRepository } from 'typeorm';
import { UsersRepositories } from '~/repositories/UsersRepositories';
import { classToPlain } from 'class-transformer';

interface IOffSet {
  offset: number;
  limit: number;
  where?: object;
}

class ListUserService {
  private repository: UsersRepositories;

  constructor() {
    this.repository = getCustomRepository(UsersRepositories);
  }

  async findAll(): Promise<Record<string, any>> {
    try {
      const users = await this.repository.find();
      return classToPlain(users);
    } catch (error) {
      throw new Error('Error fetching users!');
    }
  }

  async findOne(id: string): Promise<Record<string, any>> {
    try {
      const user = await this.repository.findOne({ id });
      return classToPlain(user);
    } catch (error) {
      throw new Error('Error fetching users!');
    }
  }

  async count(options: FindManyOptions): Promise<number> {
    return await this.repository.count(options);
  }
}

export { ListUserService };
