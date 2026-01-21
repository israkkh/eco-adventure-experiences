import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// Import other pages as you create them

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // We will add Adventure Details and Profile later
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>, // Simple error page for now
  },
]);

export default router; 

//EIHANE PATH DEFINE KORLAM JATE ROUTE GULO KAJ KORE