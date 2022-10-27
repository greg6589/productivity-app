import React, { useState, useContext } from "react";

import UserContext from "../Context/SettingsContext";

import "./User.css";

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
      <h1 className="user-title">Welcome! Enter your name Please.</h1>
      <form className="user-form">
        <input
          type="text"
          placeholder="Your name"
          className="user-form__input"
          value={userNameInput}
          onChange={handleUserName}
        />
        <button className="user-form__button" onClick={handleClick}>
          Save
        </button>
      </form>
    </>
  );
};

export default User;
