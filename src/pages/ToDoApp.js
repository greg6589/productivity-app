import React, { Component } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "../styles/ToDoAppPage.css";

class ToDoApp extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Task Number 1",
        date: "2022-05-15",
        important: true,
        active: false,
        finishDate: null,
      },
      {
        id: 1,
        text: "Task Number 2",
        date: "2022-06-12",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="ToDoApp">
        <AddTask />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default ToDoApp;
