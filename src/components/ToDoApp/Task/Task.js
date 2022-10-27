import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

// import "./TaskList.css";

const Task = (props) => {
  const style = {
    backgroundColor: "rgb(224,107,107)",
  };
  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <li style={important ? style : null} className="task">
        <div className="task__titel">
          <p>{text}</p>
          <p className="task__title-date">{date}</p>
        </div>
        <div className="task__buttons">
          <button
            className="done-button"
            onClick={() => props.changeStatus(id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={() => props.deleteTask(id)}
            className="delete-button"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <li style={important ? style : null} className="task">
        <div className="task__titel">
          <p>{text}</p>
          <p className="task__title-date">
            planned: {date} / completed {finish}
          </p>
        </div>
        <button onClick={() => props.deleteTask(id)} className="delete-button">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </li>
    );
  }
};

export default Task;
