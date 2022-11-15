import React, { useState } from "react";
import Input from "../Input/Input";
import { useAuthContext } from "../../Context/useAuthContext";

import style from "./User.module.css";

const User = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const { setUserName } = useAuthContext();

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (userNameInput.length > 0) {
      setUserName(userNameInput);
      localStorage.setItem("user", JSON.stringify(userNameInput));
      setUserNameInput("");
    } else {
      alert("Please enter the user name.");
    }
  };

  return (
    <>
      <h1 className={style.user_title}>Welcome! Enter your name Please.</h1>
      <form className={style.user_form}>
        <Input
          placeholder="Your name"
          className={style.user_form__input}
          value={userNameInput}
          onChange={handleUserName}
        />
        <button className={style.user_form__button} onClick={handleClick}>
          Save
        </button>
      </form>
    </>
  );
};

export default User;
