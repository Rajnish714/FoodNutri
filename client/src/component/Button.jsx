import React from "react";

export default function Button({ classStyle, btnName }) {
  return (
    <button className={classStyle} id="submitBtn" type="submit">
      {btnName}
    </button>
  );
}
