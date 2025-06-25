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