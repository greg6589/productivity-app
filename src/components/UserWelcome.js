import React from "react";

const UserWelcome = ({ userName }) => {
  return (
    <>
      <div className="user-welcome">
        <h1>Welcome {userName}!</h1>
      </div>
    </>
  );
};

export default UserWelcome;
