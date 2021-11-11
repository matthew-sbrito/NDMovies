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
  '/api/movies/:id',
  ensureAuthenticated,
  movieController.findAllByUser,
);

routes.post(
  '/api/movies',
  ensureAuthenticated,
  movieController.create,
);

// routes.put(
//   '/api/movies/login/:id',
//   ensureAuthenticated,
//   movieController.update,
// );

routes.delete(
  '/api/movies/:id',
  ensureAuthenticated,
  movieController.removeMovieInUser
);

export { routes };
