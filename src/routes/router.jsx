import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Navigate } from "react-router-dom";
import NewsCategory from "../components/pages/NewsCategory";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import ReadMore from './../components/pages/ReadMore';
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element:<Navigate to={"category/01"}></Navigate>
      },
      {
        path: "category/:id",
        element: <NewsCategory></NewsCategory>,
        loader:({params})=>(
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        )
      },
     
    ],
  },
  {
    path:"/about",
    element: <div>News</div>,
  },
  {
    path:"/career",
    element:<div>career</div>
  },
  {
    path:"news/:newsId",
    element:<PrivateRoute><ReadMore></ReadMore></PrivateRoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
  },
  {
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"login",
        element:<Login></Login>,
      },
      {
        path:"register",
        element:<Register></Register>,
      }
    ]
  },
  {
    path:"*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;