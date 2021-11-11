import api from "./api";
import { User } from "../entities/User";

interface IRequestAuth {
  login: string;
  password: string;
}

export interface IAuthResponse {
  token: string,
  user: User,
}

export const signIn = async ({ login, password }: IRequestAuth): Promise<IAuthResponse> => {
  try {
    const response = await api.post(`/login`,{
      login,
      password
    });

    if(response.status !== 200){
      return {} as IAuthResponse;
    }

    return response.data;  

  } catch (error) {
    return {} as IAuthResponse;
  }
};

interface IRequestAuthResgister{
  login: string;
  password: string;
  name: string;
}

export const register = async ({ name, login, password }: IRequestAuthResgister): Promise<IAuthResponse> => {
  try {
    const response = await api.post(`/users`,{
      name,
      login,
      password
    });  

    if(response.status !== 201){
      return {} as IAuthResponse;
    }

    return response.data;  

  } catch (error) {
    return {} as IAuthResponse;
  }
};
