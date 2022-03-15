import React from "react";
import Task from "../components/Task";
import "../styles/TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      changeStatus={props.changeStatus}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));

  return (
    <>
      <div className="taskList">
        <h2>
          Tasks to do: <span>{active.length}</span>
        </h2>
        <ul>
          {activeTasks >= 0 ? (
            <p className="emptyListMessage">No more tasks to be done!</p>
          ) : (
            activeTasks
          )}
        </ul>
      </div>
      <div className="taskList">
        <h2>
          Done: <span>{done.length}</span>
        </h2>
        <ul>{doneTasks}</ul>
      </div>
    </>
  );
};

export default TaskList;
