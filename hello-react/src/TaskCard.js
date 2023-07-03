import "./TaskCard.css";
const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="border-4 border-gray-500 rounded p-4 my-4">
      <h2 className="text-xl font-bold my-2">{props.title}</h2>
      <p className="font-normal">
        {props.dueDate
          ? "Due On: " + props.dueDate
          : "Completed On: " + props.completedAtDate}
      </p>
      <p className="font-normal">Asignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
