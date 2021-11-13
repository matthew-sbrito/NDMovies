import { User } from "~/entities/User";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ name: "id_imdb" })
  idimdb: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(type => User, user => user.movies)
  users: User[]

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Movie };
