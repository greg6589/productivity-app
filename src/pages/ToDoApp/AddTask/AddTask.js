import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "../AddTask/AddTask.module.css";

import "../AddTask/AddTask.module.css";
const AddTask = ({ addTask }) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [input, setInput] = useState("");
  const [important, setImportant] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleTaskName = (e) => {
    setInput(e.target.value);
  };

  const handleCheckbox = (e) => {
    setImportant(e.target.checked);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      const add = addTask(input, important, date);
      if (add) {
        setInput("");
        setImportant(false);
        setDate(minDate);
      }
    } else {
      alert("Please enter the task name.");
    }
  };

  return (
    <form className={styles.add_task_form}>
      <Input
        type={"text"}
        placeholder="Task name"
        className={styles.add_task_form__input_task}
        value={input}
        onChange={handleTaskName}
      />
      <div className={styles.add_task_form__date}>
        <label className={styles.date__label} htmlFor="date">
          Date:
        </label>
        <Input
          type={"date"}
          className={styles.date__input}
          value={date}
          min={minDate}
          onChange={handleDate}
        />
      </div>
      <div className={styles.add_task_form__important}>
        <label className={styles.important__label} htmlFor="important">
          Priority
        </label>
        <Input
          type={"checkbox"}
          checked={important}
          id={"important"}
          className={styles.important__checkbox}
          onChange={handleCheckbox}
        />
      </div>
      <Button
        handleClick={handleClick}
        className={styles.add_task_form__button}
        content={"Add"}
      />
    </form>
  );
};

export default AddTask;
