import React from "react";

// import styles from "./Button.module.css";

const Button = ({ handleClick, setState, value, className, content }) => {
  return (
    <button onClick={handleClick} className={className}>
      {content}
    </button>
  );
};

export default Button;
