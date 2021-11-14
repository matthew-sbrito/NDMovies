import React from "react";

import GlobalStyle from "./styles/global";
import MainRoutes from "./routes";
import AuthProvider from "./contexts/auth";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MyThemeProvider } from "./contexts/theme";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MyThemeProvider>
        <GlobalStyle />
        <MainRoutes />
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
      </MyThemeProvider>
    </AuthProvider>
  );
};

export default App;
