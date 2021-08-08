import React from "react";
import "../index.css";
function Button({ text, type, value, flag, className = "btn", onClick = "" }) {
  return (
    <button
      className={className}
      type={type}
      value={value}
      disabled={flag}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
