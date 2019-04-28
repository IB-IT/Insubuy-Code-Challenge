import React from "react";

const Input = props => {
  //console.log(props.value);

  const citizenshipOrMailingState =
    props.name === "citizenShip"
      ? "citizenShip"
      : props.name === "mailingState"
      ? "mailingState"
      : "";
  return (
    <React.Fragment>
      <label htmlFor={props.name} className={citizenshipOrMailingState}>
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        autoComplete="off"
        {...props}
      />
    </React.Fragment>
  );
};

export default Input;
