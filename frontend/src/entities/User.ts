import { Movie } from "./Movie";

class User {
  readonly id!: string;
  name!: string;
  login!: string;
  movies?: Movie[];
  createdAt!: Date;
  updatedAt!: Date;
}

export { User };
