import React from "react";

function Input({ placeholder, name, handleChange, inputvalue, label }) {
  return (
    <div>
      <input
        required
        name={name}
        type={name}
        placeholder={placeholder}
        value={inputvalue}
        onChange={handleChange}
      />{" "}
    </div>
  );
}

export default Input;
