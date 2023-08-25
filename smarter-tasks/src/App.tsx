import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MemberContextProvider } from "./context/members/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <MemberContextProvider>
          <RouterProvider router={router} />
        </MemberContextProvider>
      </ProjectsProvider>
    </div>
  );
};

export default App;
