import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Navigate } from "react-router";

import { Container } from "./styles";
import { useMyTheme } from "../../contexts/theme";
import Switch from "../Switch";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useMyTheme();
  const { icon, title } = theme;

  const [redirect, setRedirect] = useState(false);
  const [blackHeader, setBlackHeader] = useState(false);

  const { signed, signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  const scrollListenner = () => {
    if (window.scrollY > 20) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListenner);
    return () => {
      window.removeEventListener("scroll", scrollListenner);
    };
  }, []);

  if (redirect) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Container className={`content-header ${blackHeader ? "black" : ""}`}>
      <div className="title">NDMovie</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Ínicio</Link>
          </li>
          {signed && (
            <li>
              <Link to="/catalogs">Catalogados</Link>
            </li>
          )}
        </ul>
        <Switch
          change={toggleTheme}
          icon={icon}
          checked={title === "dark" ? true : false}
        />
      </nav>
      <div className="btn-action">
        {signed ? (
          <button onClick={handleLogout}> Sair </button>
        ) : (
          <button onClick={() => setRedirect(true)}> Entrar </button>
        )}
      </div>
    </Container>
  );
};

export default Header;
