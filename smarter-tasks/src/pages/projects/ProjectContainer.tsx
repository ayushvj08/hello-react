import { useContext, useEffect } from "react";
import { ProjectsDispatchContext } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { MemberContext } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

const ProjectContainer = () => {
  const { dispatch } = useContext(MemberContext);
  const projectDispatch = useContext(ProjectsDispatchContext);
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(dispatch);
  }, [projectDispatch, dispatch]);
  return <Outlet />;
};

export default ProjectContainer;
