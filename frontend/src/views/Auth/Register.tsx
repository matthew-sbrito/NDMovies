import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TitleAuth from "../../components/TitleAuth";
import { useAuth } from "../../contexts/auth";

import { Container, InputContainer } from "./styles";

const Register: React.FC = () => {
  const { register } = useAuth();

  const nameRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    if (nameRef.current && loginRef.current && passwordRef.current) {
      await register(
        nameRef.current.value,
        loginRef.current.value,
        passwordRef.current.value
      );
    }
  }

  return (
    <Container>
      <Link className="link-auth" to="/auth/login">
        Entrar
      </Link>
      <TitleAuth
        title="Bem vindo"
        subtitle="Faça seu cadastro! E comece a catalogar seus filmes."
      />
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <InputContainer>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              autoComplete="off"
              ref={nameRef}
            />
          </InputContainer>
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
        <button id="handleRegister">Cadastrar-se</button>
      </form>
    </Container>
  );
};

export default Register;
