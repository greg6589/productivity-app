import React from "react";

const Button = ({ handleClick, className, content, name, disabled }) => {
  return (
    <button
      onClick={handleClick}
      className={className}
      name={name}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
