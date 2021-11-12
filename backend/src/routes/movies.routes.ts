import { Router } from "express";
import { MovieController } from "~/controllers/MovieController";
import { ensureAuthenticated } from "~/middlewares/ensureAuthenticated";

const routes = Router();

// Cotrolador das rotas de usuário.
const movieController = new MovieController();


// Rotas de usuário 
routes.get(
  '/api/movies',
  ensureAuthenticated,
  movieController.findAll,
);

routes.get(
  '/api/movies/contains',
  ensureAuthenticated,
  movieController.containUser,
);

routes.get(
  '/api/movies/user',
  ensureAuthenticated,
  movieController.findAllByUser,
);

routes.post(
  '/api/movies',
  ensureAuthenticated,
  movieController.create,
);

routes.delete(
  '/api/movies/:id',
  ensureAuthenticated,
  movieController.removeMovieInUser
);

export { routes };
