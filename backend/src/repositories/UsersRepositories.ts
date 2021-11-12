import { User } from "~/entities/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
