import React from "react";
import classes from "../../UserInterface/Modal/Modal.module.css";

// component for Generating the background for the loader
const GeneralModal = (props) => {
  return (
    <div className={classes.LoadingContainerBody}>
      <div className={classes.LoadingBackground}>{props.children}</div>
    </div>
  );
};

export default GeneralModal;
