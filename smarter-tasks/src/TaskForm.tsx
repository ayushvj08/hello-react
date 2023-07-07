import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  task: TaskItem;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      task: { title: "", dueDate: "", description: "" },
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.task.title,
      dueDate: this.state.task.dueDate,
      description: this.state.task.description,
    };
    this.props.addTask(newTask);
    this.setState({ task: { title: "", dueDate: "", description: "" } });
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      task: {
        title: event.target.value,
        dueDate: this.state.task.dueDate,
        description: this.state.task.description,
      },
    });
    // console.log(`${event.target.value}`);
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      task: {
        title: this.state.task.title,
        dueDate: event.target.value,
        description: this.state.task.description,
      },
    });
    // console.log(`${event.target.value}`);
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      task: {
        title: this.state.task.title,
        dueDate: this.state.task.dueDate,
        description: event.target.value,
      },
    });
    // console.log(`${event.target.value}`);
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          required
          placeholder="title"
          type="text"
          value={this.state.task.title}
          onChange={this.titleChanged}
        />
        <input
          type="text"
          id="todoDescription"
          placeholder="description"
          value={this.state.task.description}
          onChange={this.descriptionChanged}
        />
        <input
          required
          type="date"
          id="todoDueDate"
          value={this.state.task.dueDate}
          onChange={this.dueDateChanged}
        />
        <button type="submit">Add item</button>
      </form>
    );
  }
}

export default TaskForm;
