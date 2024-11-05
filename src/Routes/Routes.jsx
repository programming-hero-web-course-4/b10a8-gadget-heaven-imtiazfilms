import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../ErrorPage";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch("")
        },
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])

export default routes;