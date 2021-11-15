import { createContext, useCallback, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../entities/User";
import api from "../services/api";
import * as auth from "../services/auth";
import { usePersistState } from "../utils/usePersisteState";

interface AuthContextData {
  user: User | null;
  token: string;
  signed: boolean;
  signIn(login: string, password: string): Promise<void>;
  register(name: string, login: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistState<User | null>("@RAuth:user", null);
  const [token, setToken] = usePersistState<string>("@RAuth:token", "");

  const verifyToken = useCallback(
    async (token: string) => {
      const verifyUser = await auth.verifyUser(token);
      if (!verifyUser) {
        setUser(null);
        setToken("");
      }
    },
    [setToken, setUser]
  );

  const defaultAuthorization = useCallback(async () => {
    await verifyToken(token);
    
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

  }, [verifyToken, token]);

  useEffect(() => { 
    defaultAuthorization()
  }, [defaultAuthorization]);

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

  function verify({ user, token }: auth.AuthResponse, msgError: string) {
    if (!!user && !!token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(user);
      setToken(token);
    }
    if (!!user) {
      toast.success(`Bem vindo ${user.name}!`);
    } else {
      toast.error(msgError);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    setToken("");
    toast.success(`Até a próxima!`);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        token,
        user,
        signIn,
        register,
        signOut,
      }}
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
