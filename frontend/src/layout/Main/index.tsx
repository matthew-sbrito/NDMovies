import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";

import { Template } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header />
        <Outlet />
        <Footer />
      </Template>
    </>
  );
};

export default Main;
