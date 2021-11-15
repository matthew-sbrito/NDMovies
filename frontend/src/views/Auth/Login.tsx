import React, { useRef } from "react";
import { useAuth } from "../../contexts/auth";

import { Container, InputContainer } from "./styles";
import { Link } from "react-router-dom";
import TitleAuth from "../../components/TitleAuth";

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin(event: any): Promise<void> {
    event.preventDefault();
    if(loginRef.current && passwordRef.current){
      await signIn(loginRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <Container>
      <Link className="link-auth" to="/auth/register">
        Cadastrar-se
      </Link>
      <TitleAuth
        title="Bem vindo"
        subtitle="Faça o login para catalogar seus filmes!"
      />
      <form>
        <div className="inputs">
          <InputContainer>
            <input
              type="text"
              name="login"
              placeholder="Login"
              ref={loginRef}
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              ref={passwordRef}
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
