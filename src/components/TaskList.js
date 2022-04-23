import React from "react";
import Task from "../components/Task";
import "../styles/TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const doneLast5 = done.slice(0, 5);

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
  if (doneLast5.length >= 2) {
    doneLast5.sort((a, b) => {
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
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
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

  const doneTasksLast5 = doneLast5.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));

  return (
    <>
      <div className="task-list">
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
      <div className="task-list done">
        <h2>
          Done: <span>{done.length}</span>
        </h2>
        <ul>{props.classIsActive ? doneTasks : doneTasksLast5}</ul>
        {done.length > 5 && (
          <button
            onClick={props.showHideTasks}
            className={"task-list_show-more-btn"}
          >
            {props.classIsActive ? "show less" : "show more"}
          </button>
        )}
      </div>
    </>
  );
};

export default TaskList;
