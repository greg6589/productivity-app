import React, { Component } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "../styles/ToDoAppPage.css";

class ToDoApp extends Component {
  localTasks;
  counter = 0;
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.localTasks = JSON.parse(localStorage.getItem("localTasksArray"));
    if (this.localTasks) {
      this.setState({
        tasks: this.localTasks,
      });
    } else {
      this.localTasks = localStorage.setItem(
        "localTasksArray",
        JSON.stringify(this.state.tasks)
      );
      this.setState({
        tasks: [],
      });
    }
  }

  componentDidUpdate() {
    this.localTasks = localStorage.setItem(
      "localTasksArray",
      JSON.stringify(this.state.tasks)
    );
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.setState({
      tasks: [...this.state.tasks, task],
    });
    this.counter++;
    return true;
  };

  changeStatus = (id) => {
    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks: this.state.tasks,
    });
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: tasks });
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
