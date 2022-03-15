import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleCheckbox = (e) => {
    this.setState({ checked: e.target.checked });
  };

  handleTaskName = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 0) {
      const add = this.props.addTask(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          date: this.minDate,
          checked: false,
        });
      }
    } else {
      alert("Please enter the task name.");
    }
  };
  render() {
    return (
      <div className="addTaskForm">
        <input
          type="text"
          placeholder="Task name"
          className="addTaskForm__inputTask"
          value={this.state.text}
          onChange={this.handleTaskName}
        />
        <div className="addTaskForm__date">
          <label className="date__label" htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            className="date__input"
            value={this.state.date}
            min={this.minDate}
            onChange={this.handleDate}
          />
        </div>
        <div className="addTaskForm__important">
          <label className="important__label" htmlFor="important">
            Priority
          </label>
          <input
            type="checkbox"
            checked={this.state.checked}
            id={"important"}
            className="important__checkbox"
            onChange={this.handleCheckbox}
          />
        </div>
        <button onClick={this.handleClick} className="addTaskForm__button">
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
