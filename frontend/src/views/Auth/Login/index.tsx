import React, { useState } from "react";
import { useAuth } from "../../../contexts/auth";
import { toast, ToastContainer } from "react-toastify";

import { Container, InputContainer, Title } from "./styles";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { signIn, signed } = useAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const notifyError = () => toast.error(" Login ou senha inválidos!");

  async function handleLogin(): Promise<void> {
    await signIn(login, password);

    if (!signed) {
      notifyError();
    }
  }

  return (
    <>
      <Container>
        <Link className="link-auth" to="/register">
          Cadastrar-se
        </Link>
        <Title>Bem vindo, faça seu login e catalogue seus filmes!</Title>
        <div className="form">
          <InputContainer>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <button id="handleLogin" onClick={handleLogin}>
            Login
          </button>
        </div>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default Login;
