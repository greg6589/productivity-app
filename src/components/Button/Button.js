import React from "react";

const Button = ({ handleClick, className, content, name }) => {
  return (
    <button onClick={handleClick} className={className} name={name}>
      {content}
    </button>
  );
};

export default Button;
