import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>
  },
  {
    path:"/news",
    element: <div>News</div>,
  },
  {
    path:"/auth",
    element:<div>Auth</div>
  },
  {
    path:"*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;