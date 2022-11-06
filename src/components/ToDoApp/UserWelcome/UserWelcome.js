import React from "react";

import style from "./UserWelcome.module.css";

const UserWelcome = ({ userName }) => {
  return (
    <>
      <div className={style.user_welcome}>
        <h1>Welcome {userName}!</h1>
      </div>
    </>
  );
};

export default UserWelcome;
