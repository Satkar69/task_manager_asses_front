import React from "react";

const Input = ({
  label,
  type = "text",
  id,
  value,
  onChange,
  placeholder,
  required = false,
  error,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input ${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
