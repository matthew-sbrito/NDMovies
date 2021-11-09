import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from '~/repositories/UsersRepositories';

interface IAuthenticateRequest {
  login: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ login, password }: IAuthenticateRequest) {
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

    return token;
  }
}

export { AuthenticateUserService };
