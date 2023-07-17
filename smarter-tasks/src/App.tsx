import TaskApp from "./TaskApp";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
function App() {
  const location = useLocation();

  const definedRoutes = ["/", "/tasks", "/tasks/:id", "/signin", "/notfound"];
  const routesWithoutHeader = ["/signin", "/notfound"];
  return (
    <div className="app">
      {definedRoutes.includes(location.pathname) ? (
        <div>
          {routesWithoutHeader.includes(location.pathname) ? null : <Header />}

          <Routes>
            <Route
              path="/"
              element={<ProtectedRoute element={<HomePage />} />}
            />
            <Route
              path="/tasks"
              element={<ProtectedRoute element={<TaskApp />} />}
            />
            <Route
              path="/tasks/:id"
              element={<ProtectedRoute element={<TaskDetailsPage />} />}
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Navigate to="/notfound" />
      )}
    </div>
  );
}

export default App;
