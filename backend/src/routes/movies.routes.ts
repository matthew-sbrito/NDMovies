import { Router } from "express";
import { MovieController } from "~/controllers/MovieController";
import { ensureAuthenticated } from "~/middlewares/ensureAuthenticated";

const routes = Router();

// Cotrolador das rotas de usuário.
const movieController = new MovieController();

// Rotas de filmes
routes.get("/api/movies", movieController.findAll);

routes.get("/api/movies/:id", movieController.findOne);

routes.get(
  "/api/contains/movies",
  ensureAuthenticated,
  movieController.containUser
);

routes.get(
  "/api/user/movies",
  ensureAuthenticated,
  movieController.findAllByUser
);

routes.post("/api/movies", ensureAuthenticated, movieController.create);

routes.delete(
  "/api/movies/:id",
  ensureAuthenticated,
  movieController.removeMovieInUser
);

export { routes };
