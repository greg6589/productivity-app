import React from "react";

// import styles from "./Button.module.css";

const Button = ({ handleClick, setState, value, className, content, name }) => {
  return (
    <button onClick={handleClick} className={className} name={name}>
      {content}
    </button>
  );
};

export default Button;
