import { Link } from "react-router-dom";

interface TaskProps {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  deleteTask: () => void;
}

const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <Link to={"/tasks/" + props.id}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button className="deleteTaskButton" onClick={() => props.deleteTask()}>
        Delete
      </button>
    </div>
  );
};
export default Task;
