import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])

export default routes;