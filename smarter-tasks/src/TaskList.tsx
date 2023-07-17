import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
          <Task
            id={`${idx}`}
            key={idx}
            title={task.title}
            dueDate={task.dueDate}
            description={task.description}
            deleteTask={() => props.deleteTask(task)}
          />
        </li>
      ))}
    </>
  );
};

export default TaskList;
