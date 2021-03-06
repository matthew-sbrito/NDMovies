import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1636410909987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
   await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "login",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
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
        foreignKeys:[
          {
            name: "UserMovies",
            referencedTableName: "user_movies",
            referencedColumnNames: ["user_id"],
            columnNames: ["id"],
          }
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
