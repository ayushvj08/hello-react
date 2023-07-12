// import React, { useEffect, useState } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface TaskAppProps {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProps) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    { tasks: [] }
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (taskToBeRemoved: TaskItem) => {
    const filteredTasks = taskAppState.tasks.filter(
      (task) => task !== taskToBeRemoved
    );
    setTaskAppState({ tasks: filteredTasks });
  };
  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList deleteTask={deleteTask} tasks={taskAppState.tasks} />
    </div>
  );
};

export default TaskApp;
