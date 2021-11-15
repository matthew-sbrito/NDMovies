import { classToPlain } from 'class-transformer';
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "~/repositories/UsersRepositories";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface UserRequest {
  name: string;
  login: string;
  password: string;
}

class CreateUserService {
  async execute({ name, login, password }: UserRequest){
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!login) {
      throw new Error("Login incorrect");
    }
    const userAlreadyExists = await usersRepository.findOne({
      login,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      login,
      password: passwordHash,
    });
    const id = user.id;
    await usersRepository.save(user);
    
    user.setId(id);   
    
    const token = sign({ login: user.login }, process.env.NDMOVIE_JWT, {
      subject: user.id,
      expiresIn: '1d',
    });

    
    return { token, user: classToPlain(user) };

  }
}

export { CreateUserService };
