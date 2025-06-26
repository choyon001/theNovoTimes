import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Navigate } from "react-router-dom";
import NewsCategory from "../components/pages/NewsCategory";

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
    element:<div>Auth</div>
  },
  {
    path:"*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;