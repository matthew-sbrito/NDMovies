import api from "./api";
import { User } from "../entities/User";

interface RequestAuth {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const signIn = async ({
  login,
  password,
}: RequestAuth): Promise<AuthResponse> => {
  try {
    const response = await api.post(`/login`, {
      login,
      password,
    });

    if (response.status !== 200) {
      return {} as AuthResponse;
    }

    return response.data;
  } catch (error) {
    return {} as AuthResponse;
  }
};

interface RequestAuthResgister {
  login: string;
  password: string;
  name: string;
}

export const register = async ({
  name,
  login,
  password,
}: RequestAuthResgister): Promise<AuthResponse> => {
  try {
    const response = await api.post(`/users`, {
      name,
      login,
      password,
    });

    if (response.status !== 201) {
      return {} as AuthResponse;
    }

    return response.data;
  } catch (error) {
    return {} as AuthResponse;
  }
};

export const verifyUser = async (token: string): Promise<User | null> => {  
  try {
    const response = await api.get("/verify/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { user } = response.data;

    return user;
  } catch (error) {
    return null;
  }
};
