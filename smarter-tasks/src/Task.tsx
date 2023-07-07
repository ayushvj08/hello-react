import React from "react";
interface TaskProp {
  title: string;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Completed on: due date...</p>
        <p>Assignee: name...</p>
      </div>
    );
  }
}
export default Task;
