import 'reflect-metadata';
import 'dotenv/config';
import './database';
import cors from 'cors'

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { routes as userRoutes } from "~/routes/users.routes";

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRoutes);

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