import React, { useState, useContext } from "react";
import "../styles/User.css";
import UserContext from "./SettingsContext";

const User = () => {
  const [userNameInput, setUserNameInput] = useState("");

  const UserIfo = useContext(UserContext);
  const setUserLogged = UserIfo.setUserLogged;
  const setUserName = UserIfo.setUserName;

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (userNameInput.length > 0) {
      localStorage.setItem("user", JSON.stringify(userNameInput));
      setUserName(userNameInput);
      setUserNameInput("");
      setUserLogged(true);
    } else {
      alert("Please enter the user name.");
    }
  };

  return (
    <>
      <h1>Welcome! Enter your name Please.</h1>
      <form>
        <input
          type="text"
          placeholder="Task name"
          className="add-task-form__input-task"
          value={userNameInput}
          onChange={handleUserName}
        />
        <button className="add-task-form__button" onClick={handleClick}>
          Save
        </button>
      </form>
    </>
  );
};

export default User;
