import React from "react";
import { TasksProvider } from "../../context/task/context";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { CommentContextProvider } from "../../context/comments/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentContextProvider>
        <ProjectDetails />
        <Outlet />
      </CommentContextProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
