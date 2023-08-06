import "./TaskCard.css";

const TaskCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, dueDate, completedAtDate, assigneeName } = props;
  return (
    <div className="TaskItem border-4 border-gray-500 rounded p-4 my-4">
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <p className="font-normal">
        {dueDate
          ? "Due on: " + dueDate
          : completedAtDate
          ? "Completed on: " + completedAtDate
          : null}
      </p>
      <p className="font-normal">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
