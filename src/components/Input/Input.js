import React from "react";

const Input = ({ placeholder, className, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
