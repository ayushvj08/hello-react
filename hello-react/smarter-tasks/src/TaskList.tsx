import React from "react";
import Task from "./Task";

interface Props {}
interface TaskItem {
  title: string;
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  componentDidMount() {
    const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
    this.setState((state, props) => ({
      tasks,
    }));
  }
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.state.tasks.map((task, idx) => (
          <Task key={idx} title={task.title} />
        ))}
      </>
    );
  }
}

export default TaskList;
