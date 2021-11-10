import { Navigate } from "react-router"

import Auth from "../layout/Auth";

import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

const authRoutes = {
  path: '/',
  element: <Auth/>,
  children:[
    { path: '', element: <Navigate to="/login"/> },
    { path: '*', element: <Navigate to="/login"/> },
    { path: 'login', element: <Login />  },
    { path: 'register', element:  <Register /> },
  ],
};

export { authRoutes }
