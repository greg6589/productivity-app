import React from "react";

import Task from "../Task/Task";

import "../TaskList/TaskList.css";

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
      <div className="task-list-container">
        <div className="task-list">
          <h2>
            You have{" "}
            <span>
              {active.length}
              {active.length === 1 ? " task " : " tasks "}
              to be done!
            </span>
          </h2>
          <ul>{activeTasks}</ul>
        </div>
        <div className="task-list done">
          {done.length === 0 ? null : (
            <h2>
              You have done{" "}
              <span>
                {done.length} {done.length < 2 ? "task" : "tasks"}
              </span>{" "}
              today!
            </h2>
          )}

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
      </div>
    </>
  );
};

export default TaskList;
