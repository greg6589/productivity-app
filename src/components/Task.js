import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

import "../styles/TaskList.css";

const Task = (props) => {
  const style = { backgroundColor: "rgb(175, 94, 94)" };
  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <li style={important ? style : null} className="taskList-task">
        <div className="task-titel">
          <p>{text}</p>
          <p className="task-title-date">{date}</p>
        </div>
        <div className="task-buttons">
          <button className="taskDoneButton">
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={() => props.deleteTask(id)}
            className="deleteDoneButton"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <li style={important ? style : null} className="taskList-task">
        <div className="task-titel">
          <p>{text}</p>
          <p className="task-title-date">
            planned: {date} / completed {finish}
          </p>
        </div>
        <button
          onClick={() => props.deleteTask(id)}
          className="deleteDoneButton"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </li>
    );
  }
};

export default Task;
