import { createContext, useCallback, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../entities/User";
import api from "../services/api";
import * as auth from "../services/auth";
import { usePersistState } from "../utils/usePersisteState";

interface IAuthContext {
  user: User | null;
  token: string;
  signed: boolean;
  signIn(login: string, password: string): Promise<void>;
  register(name: string, login: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistState<User | null>("@RAuth:user", null);
  const [token, setToken] = usePersistState<any>("@RAuth:token", {});

  function defaultAuthorization(){    
    api.defaults.headers.common.Authorization = `Bearer ${token.token}`;   
  };

  useEffect(defaultAuthorization,[token]);

  async function signIn(login: string, password: string): Promise<void> {
    const response = await auth.signIn({ login, password });
    verify(response, "Login ou senha inválidos!");
  }
  async function register(
    name: string,
    login: string,
    password: string
  ): Promise<void> {
    const response = await auth.register({
      name,
      login,
      password,
    });
    verify(response, "Ocorreu um erro ao cadastrar!");
  }

  function verify(response: auth.IAuthResponse, msgError: string) {
    if (response.user && response.token) {
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

      setUser(response.user);
      setToken({ token: response.token});
    }

    if (!!response.user) {
      toast.success(`Bem vindo ${response.user.name}!`);
    } else {
      toast.error(msgError);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    setToken({});
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), token: token.token, user, signIn, register, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
export { useAuth };
