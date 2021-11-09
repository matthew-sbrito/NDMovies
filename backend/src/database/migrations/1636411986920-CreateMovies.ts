import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovies1636411986920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "movies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_imdb",
            type: "varchar" 
          },
          {
            name: "title",
            type: "varchar" 
          },
          {
            name: "description",
            type: "varchar" 
          },
          {
            name: "image",
            type: "varchar" 
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("movies");
  }
}
