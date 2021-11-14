import { Router } from "express";
import { UserController } from "~/controllers/UserController";
import { ensureAuthenticated } from "~/middlewares/ensureAuthenticated";

const routes = Router();

// Cotrolador das rotas de usuário.
const userController = new UserController();


// Rotas de usuário 
routes.get(
  '/api/verify/user',
  ensureAuthenticated,
  userController.verifyToken,
);
routes.get(
  '/api/users',
  ensureAuthenticated,
  userController.findAll,
);

routes.get(
  '/api/users/:id',
  ensureAuthenticated,
  userController.findOne,
);

routes.post(
  '/api/users',
  userController.create,
);

routes.put(
  '/api/users/login/:id',
  ensureAuthenticated,
  userController.updateLogin,
);
routes.put(
  '/api/users/password/:id',
  ensureAuthenticated,
  userController.updatePassword,
);
routes.put(
  '/api/users/:id',
  ensureAuthenticated,
  userController.update,
);

// Rota de login
routes.post(
  '/api/login',
  userController.authenticate
);

// Rota de filmes em usuários
routes.post(
  '/api/users/movie',
  ensureAuthenticated,
  userController.addMovie
);

routes.delete(
  '/api/users/movie',
  ensureAuthenticated,
  userController.removeMovie
);

export { routes };
