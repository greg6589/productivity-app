import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "../styles/ToDoAppPage.css";

const ToDoApp = () => {
  const getLocalTasks = () => {
    let tasksLS = localStorage.getItem("tasksList");
    if (tasksLS) {
      return JSON.parse(localStorage.getItem("tasksList"));
    }
    if (!tasksLS) {
      localStorage.setItem("tasksList", JSON.stringify([]));
    }
  };
  const getId = () => {
    let id = localStorage.getItem("id");
    if (id) {
      return JSON.parse(localStorage.getItem("id"));
    }
    if (!id) {
      localStorage.setItem("id", JSON.stringify(0));
    }
  };

  const [tasks, setTasks] = useState(getLocalTasks());
  let [id, setId] = useState(getId());
  const [classIsActive, setClassIsActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
    localStorage.setItem("id", JSON.stringify(id));
  }, [tasks]);

  const addTask = (input, important, date) => {
    const task = {
      id: id,
      text: input,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    setId((id) => id + 1);
    return true;
  };

  const changeStatus = (id) => {
    let newTasks = [...tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    let newTasks = [...tasks];
    newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const showHideDoneTasks = () => {
    setClassIsActive((classIsActive) => !classIsActive);
  };

  return (
    <div className="ToDoApp">
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        showHideTasks={showHideDoneTasks}
        classIsActive={classIsActive}
      />
    </div>
  );
};

export default ToDoApp;
