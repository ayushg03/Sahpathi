import React from "react";
import "./CheckboxStyle.css";

// generate the checkbox
const Checkbox = (props) => {
  return (
    <>
      <input
        style={{ display: "none" }}
        class="checkbox-tools"
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked === props.value}
        id={props.id}
        onChange = {props.OnchageValue}
      ></input>

      <label class="for-checkbox-tools" for={props.id}>
        {props.title}
      </label>
    </>
  );
};

export default Checkbox;
