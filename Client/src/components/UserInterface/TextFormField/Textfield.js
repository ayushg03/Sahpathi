import React from "react";
import classes from "./Textfield.module.css";

// Componet to generate custom textfield, it takes the data as an argument for display
const Textfield = (props) => {
  return (
    <label className={classes.label}>
      <span id="txt">{props.title}</span>
      <input
        value={props.value}
        type="text"
        className={classes.input_container}
        name="title"
        required
        onChange={props.onChange}
      />
    </label>
  );
};

export default Textfield;
