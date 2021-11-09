import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("movies")
class Movie{
  
  @PrimaryColumn()
  readonly id: string;

  @Column({ name: "id_imdb"})
  idIMDb: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

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

export { Movie }