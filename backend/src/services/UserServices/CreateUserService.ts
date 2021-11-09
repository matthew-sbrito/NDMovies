import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "~/repositories/UsersRepositories";
import { hash } from "bcryptjs";
import { User } from "~/entities/User";

interface IUserRequest {
  name: string;
  login: string;
  password: string;
}

class CreateUserService {
  async execute({ name, login, password }: IUserRequest): Promise<User> {
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

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
