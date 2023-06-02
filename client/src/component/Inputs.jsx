import React from "react";

function Input({ placeholder, name, handleChange, inputvalue, label }) {
  return (
    <div>
      <h1>{label}</h1>
      <input
        placeholder={placeholder}
        className="form-control"
        type="text"
        name={name}
        value={inputvalue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
