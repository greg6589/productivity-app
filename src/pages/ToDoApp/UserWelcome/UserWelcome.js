import React from "react";
import { useAuthContext } from "../../../Context/useAuthContext";
import style from "./UserWelcome.module.css";

const UserWelcome = () => {
  const { user } = useAuthContext();
  return (
    <>
      <div className={style.user_welcome}>
        <h1>Welcome {user}!</h1>
      </div>
    </>
  );
};

export default UserWelcome;
