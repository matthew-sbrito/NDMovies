import { createContext, useContext, useEffect } from "react";
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
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistState<User | null>("@RAuth:user", null);
  const [token, setToken] = usePersistState<string>("@RAuth:token", "");

  function defaultAuthorization() {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  useEffect(defaultAuthorization, [token]);

  async function signIn(login: string, password: string): Promise<void> {
    const response = await auth.signIn({ login, password });

    if (response.user && response.token) {
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

      setUser(response.user);
      setToken(response.token);

      localStorage.setItem("@RAuth:user", JSON.stringify(response.user));
      localStorage.setItem("@RAuth:token", JSON.stringify(response.token));
    }

    if (!!response.user) {
      toast.success(`Bem vindo ${response.user.name}!`);
    } else {
      toast.error("Login ou senha inválidos!");
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    setToken("");
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), token, user, signIn, signOut }}
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
