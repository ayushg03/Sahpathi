import React from "react";
import classes from "./BasicLayout1.module.css";

// make a padding to the screen for better UX, receives the components as a children from props
const BasicLayout1 = (props) => {
  return <div className={classes.BasicLayout}>{props.children}</div>;
};

export default BasicLayout1;
