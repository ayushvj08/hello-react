import React from "react";
import "./TaskCard.css";

interface TaskCardProp {
  title: string,
  dueDate?: string,
  completedAtDate?: string,
  assigneeName: string
}

const TaskCard = (props: TaskCardProp) => {
  return (
    <div className="border-4 border-gray-500 rounded p-4 my-4">
      <h2 className="text-xl font-bold my-2">{props.title}</h2>
      {props.dueDate
        ? (<p className="font-normal">Due On: {props.dueDate}</p>)
        : props.completedAtDate ? (<p className="font-normal">Completed On:  {props.completedAtDate}</p>) : null}
      <p className="font-normal">Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
