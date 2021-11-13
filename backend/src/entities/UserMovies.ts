import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user_movies")
export class UserMovies {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  @PrimaryColumn()
  @JoinTable({ name: 'users' })
  user_id: string;

  @Column()
  @PrimaryColumn()
  @JoinTable({ name: 'movies' })
  movie_id: string;

}
