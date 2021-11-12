import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Movie } from "./Movie";

@Entity("users")
class User{
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  @Exclude()
  password: string;
  
  @ManyToMany(type => Movie, movie => movie.users)
  @JoinTable({
    name: "user_movies",
    joinColumn:{
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn:{
      name: 'movie_id',
      referencedColumnName: 'id',
    }
  })
  movies: Movie[]

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
  user: Movie;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { User }