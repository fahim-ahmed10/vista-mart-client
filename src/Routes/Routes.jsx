import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "./../pages/Home/Home";
import Signup from './../pages/Signup/Signup';
import Login from './../pages/Login/Login';
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoutes from './PrivateRoutes';
import Overview from "../pages/Dashboard/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
    children: [
      {
        path: '/dashboard/overview',
        element: <Overview/>
      },
    ],
  }
]);
