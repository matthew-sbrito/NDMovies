import { Request, Response } from "express";
import { AuthenticateUserService } from "~/services/UserServices/AuthenticateUserService";
import { CreateUserService } from "~/services/UserServices/CreateUserService";
import { ListUserService } from "~/services/UserServices/ListUserService";
import { UpdateUserService } from "~/services/UserServices/UpdateUserService";

class UserController {
  async findAll(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const listUserService = new ListUserService();

    const users = await listUserService.findAll();

    return response.json({ users });
  }

  async findOne(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { id } = request.params;

    try {
      const user = await new ListUserService().findOne(id);
      return response.json({ user });
    } catch (error) {
      return response.status(404).json({
        message: "User not found",
      });
    }
  }
  async create(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { name, login, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      login,
      password,
    });

    return response.json({ user });
  }

  async update(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { id } = request.params;
    const { name } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.update({
      id,
      name,
    });

    return response.status(200).json({ user });
  }

  async updateLogin(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { id } = request.params;
    const { login } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.updateLogin(id, login);

    if (!user) {
      throw new Error("Error updating login");
    }

    return response.json({ message: "Login updated successfully" });
  }

  async updatePassword(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { id } = request.params;
    const { password } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.updatePassword(id, password);

    if (!user) {
      throw new Error("Error updating password");
    }

    return response.json({ message: "Password updated successfully" });
  }

  async authenticate(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { login, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      login,
      password,
    });

    return response.json({ token });
  }

  async addMovie(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { idUser, idMovie } = request.body;

    const updateUserService = new UpdateUserService();

    const user = updateUserService.addMovie(idUser, idMovie);

    return response.json({ user });
  }
 
  async removeMovie(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    const { idUser, idMovie } = request.body;

    const updateUserService = new UpdateUserService();

    const user = updateUserService.removeMovie(idUser, idMovie);

    return response.json({ user });
  }
}

export { UserController };
