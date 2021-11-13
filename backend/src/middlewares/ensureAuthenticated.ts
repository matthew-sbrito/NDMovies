import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "~/repositories/UsersRepositories";
import { ListUserService } from "~/services/UserServices/ListUserService";

interface IPayload {
  sub: string;
}

/**
 * Método responsável por receber o token e autenticar o usuário na aplicação.
 */
async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Recebe o token
  const authToken = request.headers.authorization;

  // Validar se o token esta preenchido
  if (!authToken) {
    return response.status(401).json({ message: "Token missing" });
  }

  const [, token] = authToken.split(" ");

  // Validar se o token é válido
  try {
    const { sub } = verify(token, process.env.NDMOVIE_JWT) as IPayload;
    
    
    // Recuperar informação do usuário
    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Token missing" });
  }
}

export { ensureAuthenticated };
