import React from "react";
import "./styles.css";

function Button({ text, onClick, outlined }) {
  return (
    <button
      className={outlined ? "btn-outlined" : "btn"}
      onClick={() => onClick && onClick()}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
