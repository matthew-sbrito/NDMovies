import React from "react";

import GlobalStyle from "./styles/global";
import MainRoutes from "./routes";
import AuthProvider from "./contexts/auth";

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainRoutes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
