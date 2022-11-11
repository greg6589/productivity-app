import React from "react";

const Input = ({ placeholder, className, value, onChange, readOnly }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default Input;
