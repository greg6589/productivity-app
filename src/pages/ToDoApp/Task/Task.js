import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "../Task/Task.module.css";

const Task = (props) => {
  const { text, date, id, active, important, finishDate } = props.task;

  const taskImportant = important ? styles.taskImportant : "";

  if (active) {
    return (
      <li className={`${styles.task} ${taskImportant}`}>
        <div className={styles.task__titel}>
          <p>{text}</p>
          <p className={styles.task__title_date}>{date}</p>
        </div>
        <div className={styles.task__buttons}>
          <button
            className={styles.done_button}
            onClick={() => props.changeStatus(id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={() => props.deleteTask(id)}
            className={styles.delete_button}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <li className={`${styles.task} ${taskImportant}`}>
        <div className={styles.task__titel}>
          <p>{text}</p>
          <p className={styles.task__title_date}>
            planned: {date} / completed {finish}
          </p>
        </div>
        <button
          onClick={() => props.deleteTask(id)}
          className={styles.delete_button}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </li>
    );
  }
};

export default Task;
