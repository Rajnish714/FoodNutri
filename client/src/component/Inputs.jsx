import React from "react";

function Input({ placeholder, name, handleChange, inputvalue, label }) {
  return (
    <div>
      <h1>{label}</h1>
      <input
        placeholder={placeholder}
        type="text"
        name={name}
        value={inputvalue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
