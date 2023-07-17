import React from "react";
import { useParams } from "react-router-dom";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

const TaskDetailsPage = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const tasks = JSON.parse(localStorage.getItem("tasks") || "{}").tasks;
  let task;
  if (tasks) {
    task = tasks[id || 0];
  }

  return (
    <div>
      <h3>{task ? task.title : null}</h3>
      <p>This is the Task Details page for task with ID: {id}</p>
    </div>
  );
};

export default TaskDetailsPage;
