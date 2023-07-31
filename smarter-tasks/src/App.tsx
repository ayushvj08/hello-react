import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import { ProtectedRoute } from "./ProtectedRoute";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
