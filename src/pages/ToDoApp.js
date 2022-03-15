import React, { Component } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "../styles/ToDoAppPage.css";

class ToDoApp extends Component {
  counter = 0;
  state = {
    tasks: [],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({ tasks: [...prevState.tasks, task] }));
    return true;
  };

  changeStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="ToDoApp">
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeStatus={this.changeStatus}
        />
      </div>
    );
  }
}

export default ToDoApp;
