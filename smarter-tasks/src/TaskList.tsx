import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task, idx) => (
        <Task
          key={idx}
          title={task.title}
          dueDate={task.dueDate}
          description={task.description}
        />
      ))}
    </>
  );
};

export default TaskList;
