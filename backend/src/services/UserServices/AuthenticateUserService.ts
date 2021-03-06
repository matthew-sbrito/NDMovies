import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from '~/repositories/UsersRepositories';

interface AuthenticateRequest {
  login: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ login, password }: AuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      login,
    });

    if (!user) {
      throw new Error('Login/Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Login/Password incorrect');
    }

    const token = sign({ login: user.login }, process.env.NDMOVIE_JWT, {
      subject: user.id,
      expiresIn: '1d',
    });

    return { token, user: classToPlain(user) };
  }
}

export { AuthenticateUserService };
