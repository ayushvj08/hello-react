import React from "react";
import { TaskItem } from "./types";
interface TaskProp {
  task: TaskItem;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div>
        <div className="TaskItem">
          <h3>
            {this.props.task.title} ({this.props.task.dueDate})
          </h3>
          {this.props.task.description}
        </div>
      </div>
    );
  }
}
export default Task;
