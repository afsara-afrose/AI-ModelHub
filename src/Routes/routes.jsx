import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import AllModel from "../Pages/AllModel";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,

        },
        {
            path:'/add-model',
            element:<AddModel></AddModel>,

        },
        {
            path:'/all-model',
            element:<AllModel></AllModel>,

        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
]);
