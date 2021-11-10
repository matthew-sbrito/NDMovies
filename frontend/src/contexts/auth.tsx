import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../entities/User";
import api from "../services/api";
import * as auth from "../services/auth";

interface IAuthContext {
  user: User | null;
  token: string;
  signed: boolean;
  signIn(login: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");

  function loadStorageData() {
    const storagedUser = localStorage.getItem("@RAuth:user");
    const storagedToken = localStorage.getItem("@RAuth:token");

    if (storagedUser && storagedToken) {
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

      setUser(JSON.parse(storagedUser));
      setToken(storagedToken);
    }
  }

  useEffect(loadStorageData, []);

  async function signIn(login: string, password: string): Promise<void> {
    const response = await auth.signIn({ login, password });

    if (response.user && response.token) {
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

      setUser(response.user);
      setToken(response.token);

      localStorage.setItem("@RAuth:user", JSON.stringify(response.user));
      localStorage.setItem("@RAuth:token", JSON.stringify(response.token));
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    setToken("");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, token, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () =>{
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
export { useAuth }
