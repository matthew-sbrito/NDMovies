import axios from "axios";
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
  const baseUrl = process.env.REACT_APP_NDMOVIES_API;
 
  try {
    const response = await axios.post(`${baseUrl}/login`,{
      login,
      password
    });
  
    return response.data;  
  } catch (error) {
    return {} as IAuthResponse;
  }
};
