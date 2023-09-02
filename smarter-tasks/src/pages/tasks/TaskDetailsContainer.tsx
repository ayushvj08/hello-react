import { useContext, useEffect } from "react";
import { ProjectsStateContext } from "../../context/projects/context";
import { useTasksState } from "../../context/task/context";
import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
// import { CommentContextProvider } from "../../context/comments/context";
import { fetchComments } from "../../context/comment/actions";
import { CommentContext } from "../../context/comment/context";

const TaskDetailsContainer = () => {
  const { taskID, projectID } = useParams();
  const projectState = useContext(ProjectsStateContext);
  const { commentDispatch } = useContext(CommentContext);
  const taskListState = useTasksState();
  const isFetchingTasks = taskListState.isLoading;
  const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
  useEffect(() => {
    fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
  }, [commentDispatch, taskID, projectID]);

  // We will render a loader based on the status,
  // We make sure, the tasks have been fetched, project is a valid one.
  if (isFetchingTasks || !projectState || projectState?.isLoading) {
    return <>Loading...</>;
  }
  if (!selectedTask) {
    return <>No such task!</>;
  }

  return <TaskDetails />;
};

export default TaskDetailsContainer;
