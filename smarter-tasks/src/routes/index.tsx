import { Navigate, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import { ProtectedRoute } from "./ProtectedRoute";
import Notfound from "../pages/Notfound";
import AccountLayout from "../layouts/account";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },

      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
export default router;
