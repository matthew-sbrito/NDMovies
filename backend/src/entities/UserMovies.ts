import { Column, Entity, JoinTable, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_movies")
export class UserMovies {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @PrimaryColumn()
  @JoinTable({ name: 'users' })
  user_id: string;

  @Column()
  @PrimaryColumn()
  @JoinTable({ name: 'movies' })
  movie_id: string;

  constructor(){
    this.id = 1;
  }
}
