import { Navigate } from "react-router"

import Auth from "../layout/Auth";

import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

const authRoutes = {
  path: 'auth',
  element: <Auth/>,
  children:[
    { path: '', element: <Navigate to="/auth/login"/> },
    { path: '*', element: <Navigate to="/auth/login"/> },
    { path: 'login', element: <Login />  },
    { path: 'register', element:  <Register /> },
  ],
};

export { authRoutes }
