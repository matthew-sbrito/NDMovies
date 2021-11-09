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
  
  @ManyToMany(()=> Movie)
  @JoinTable()
  movies: Movie[]

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

export { User }