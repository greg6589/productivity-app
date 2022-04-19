import React, { useState } from "react";
import "../styles/AddTask.css";

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

  const handleClick = () => {
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
    <div className="addTaskForm">
      <input
        type="text"
        placeholder="Task name"
        className="addTaskForm__inputTask"
        value={input}
        onChange={handleTaskName}
      />
      <div className="addTaskForm__date">
        <label className="date__label" htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          className="date__input"
          value={date}
          min={minDate}
          onChange={handleDate}
        />
      </div>
      <div className="addTaskForm__important">
        <label className="important__label" htmlFor="important">
          Priority
        </label>
        <input
          type="checkbox"
          checked={important}
          id={"important"}
          className="important__checkbox"
          onChange={handleCheckbox}
        />
      </div>
      <button onClick={handleClick} className="addTaskForm__button">
        Add
      </button>
    </div>
  );
};

export default AddTask;
