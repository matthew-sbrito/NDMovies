import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleAuth from "../../components/TitleAuth";
import { useAuth } from "../../contexts/auth";

import { Container, InputContainer } from "./styles";

const Register: React.FC = () => {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event: any): Promise<void> {
    event.preventDefault();

    await register(name, login, password);
  }

  return (
    <Container>
      <Link className="link-auth" to="/auth/login">
        Entrar
      </Link>
      <TitleAuth 
      title="Bem vindo" 
      subtitle="Faça seu cadastro! E comece a catalogar seus filmes." />
      <form>
        <div className="inputs">
          <InputContainer>
            <input
              type="text"
              name="login"
              placeholder="Nome"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
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
        <button id="handleRegister" onClick={handleRegister}>
          Cadastrar-se
        </button>
      </form>
    </Container>
  );
};

export default Register;
