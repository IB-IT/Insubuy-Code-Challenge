import React from "react";

const Button = props => {
  return (
    <button
      style={props.style}
      className={props.type === "orange" ? "btn btn-orange submitFormBtn" : "btn btn-link clearFormBtn"}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
