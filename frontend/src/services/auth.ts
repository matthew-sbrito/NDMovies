import api from "./api";
import { User } from "../entities/User";

interface IRequestAuth {
  login: string;
  password: string;
}

interface IAuthResponse {
  token: string,
  user: User,
}

export const signIn = async ({ login, password }: IRequestAuth): Promise<IAuthResponse> => {
  try {
    const response = await api.post(`/login`,{
      login,
      password
    });
  
    return response.data;  
  } catch (error) {
    return {} as IAuthResponse;
  }
};
