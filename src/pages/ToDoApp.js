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
    if (localStorage.getItem("localTasksArray")) {
      this.setState({
        tasks: this.localTasks,
      });
    } else {
      this.setState({
        this: [],
      });
    }
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

    this.localTasks = [...this.localTasks, task];
    localStorage.setItem("localTasksArray", JSON.stringify(this.localTasks));
    this.setState({
      tasks: this.localTasks,
    });

    this.counter++;
    return true;
  };

  changeStatus = (id) => {
    this.localTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    localStorage.setItem("localTasksArray", JSON.stringify(this.localTasks));
    this.setState({
      tasks: this.localTasks,
    });
  };

  deleteTask = (id) => {
    let tasks = [...this.localTasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.localTasks = tasks;
    localStorage.setItem("localTasksArray", JSON.stringify(this.localTasks));
    this.setState({ tasks: this.localTasks });
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
