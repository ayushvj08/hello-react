import React from "react";
import { useParams } from "react-router-dom";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  return (
    <div>
      <h1>Task Details</h1>
      <p>This is the Task Details page for task with ID: {id}</p>
    </div>
  );
};

export default TaskDetailsPage;
