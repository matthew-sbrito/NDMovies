import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { toast } from "react-toastify";

import { Container, InputContainer } from "./styles";
import { Link } from "react-router-dom";
import TitleAuth from "../../components/TitleAuth";

const Login: React.FC = () => {
  const { signIn, signed } = useAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const notifyError = () => toast.error(" Login ou senha inválidos!");

  async function handleLogin(event: any): Promise<void> {
    event.preventDefault();

    await signIn(login, password);

    if (!signed) {
      notifyError();
    }
  }

  return (
    <Container>
      <Link className="link-auth" to="/register">
        Cadastrar-se
      </Link>
      <TitleAuth 
      title="Bem vindo"
      subtitle="Faça seu login e catalogue seus filmes!"
      />
      <form>
        <div className="inputs">
          <InputContainer>
            <input
              type="text"
              name="login"
              placeholder="Login"
              value={login}
              autoComplete="off"
              onChange={(e) => setLogin(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
        </div>
        <button id="handleLogin" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </Container>
  );
};

export default Login;
