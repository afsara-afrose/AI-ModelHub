import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import AllModel from "../Pages/AllModel";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ModelPurchase from "../Pages/ModelPurchase";
import MyModel from "../Pages/MyModel";
import PrivateRoute from "../Components/PrivateRoute";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:3000/latest-models'),
      },
      {
        path: "/add-model",

        element: (
          <PrivateRoute>
            <AddModel></AddModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-model",
        element: <AllModel></AllModel>,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path:'/update-model/:id',
        element:
        <PrivateRoute>
          <UpdateModel>
          </UpdateModel>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/model-purchase",
        element:<PrivateRoute>
           <ModelPurchase></ModelPurchase>
        </PrivateRoute>,
        
      },
      {
        path: "/my-model",
        element: <PrivateRoute>
          <MyModel></MyModel>
        </PrivateRoute>,
      },
    ],
  },
]);
