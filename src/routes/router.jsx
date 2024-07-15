import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../error/Error";
import Root from "../Root";
import Role from "../pages/Role";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/role",
        element: <Role />,
      },
    ],
  },
]);
export default router;
