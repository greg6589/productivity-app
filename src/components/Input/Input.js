import React from "react";

const Input = ({
  type,
  id,
  placeholder,
  className,
  value,
  onChange,
  minDate,
  readOnly,
  checked,
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      min={minDate}
      readOnly={readOnly}
      checked={checked}
    />
  );
};

export default Input;
