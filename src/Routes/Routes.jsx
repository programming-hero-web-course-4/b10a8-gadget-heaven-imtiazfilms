import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../ErrorPage";
import Cards from "../Components/Cards";
import CardDetails from "../Pages/CardDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../products.json"),
          },
        ]
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch("../products.json")
            .then(res => res.json())
            .then(data => data.find(product => product.product_id === params.id)),
      }
    ]
  }
])

export default routes;