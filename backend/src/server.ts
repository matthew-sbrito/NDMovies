import 'reflect-metadata';
import 'dotenv/config';
import './database';
import cors from 'cors'

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { routes as userRoutes } from "~/routes/users.routes";
import { routes as movieRoutes } from "~/routes/movies.routes";

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRoutes);
app.use(movieRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

const port = process.env.NDMOVIE_PORT;

app.listen(port, ()=> console.log('Server NDMovie/Backend is running!'));



// name: "user_movies",
// columns: [
//   {
//     name: "id",
//     type: "int",
//     isPrimary: true,
//     generationStrategy: "increment",
//   },
//   {
//     name: "user_id",
//     type: "uuid",
//   },
//   {
//     name: "movie_id",
//     type: "uuid",
//   },
// ],
// foreignKeys: [
//   {
//     name: "User",
//     referencedTableName: "users",
//     referencedColumnNames: ["id"],
//     columnNames: ["user_id"],
//   },
//   {
//     name: "Movie",
//     referencedTableName: "movies",
//     referencedColumnNames: ["id"],
//     columnNames: ["movie_id"],
//   },
// ],