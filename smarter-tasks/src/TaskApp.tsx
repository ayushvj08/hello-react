import React, { useEffect, useState } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProps {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProps) => {
  const [taskAppState, setTaskAppState] = useState<TaskAppState>({ tasks: [] });
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={taskAppState.tasks} />
    </div>
  );
};

export default TaskApp;
