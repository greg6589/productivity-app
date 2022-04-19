import React from "react";
import Task from "../components/Task";
import "../styles/TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

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
          {active.length > 0 ? (
            activeTasks
          ) : (
            <h3 className="emptyListMessage">No more tasks to be done!</h3>
          )}
        </ul>
      </div>
      <div className="taskList">
        <h2>
          Done: <span>{done.length}</span>
        </h2>
        <ul
          className={
            props.classIsActive
              ? "taskList_done-tasks active"
              : "taskList_done-tasks"
          }
        >
          {doneTasks}
        </ul>
        {done.length > 5 && (
          <button
            onClick={props.showHideTasks}
            className={"taskList_show-more-btn"}
          >
            {props.classIsActive ? "show less" : "show more"}
          </button>
        )}
      </div>
    </>
  );
};

export default TaskList;
