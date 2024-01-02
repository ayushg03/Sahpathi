import React from "react";
import classes from "../Card/Card.module.css";
import paperImg from "../../assets/card.jpg";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';
var FileSaver = require('file-saver');

// Generate the card and display the content which is received from props
const CardP = (props) => {

  return (
    //  add the id to the path
    <>
    {/* <a
  href={props.link}
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "black" }}
> */}
      <div
        className={classes.Book1}
        onClick={() => {
          window.open(props.link, '_blank', 'noopener noreferrer');
        }
      }
      >
        <div className={classes.text}>
        <div className={classes.titleText} >{props.title}</div>
          <div className={classes.authorText}>{"Author: " +props.author}</div>
          <br/>
          <div className={classes.descText} style={{textAlign:"left"}}>{props.desc}</div>
          <div className={classes.descText} style={{textAlign:"left"}}> 
          <br/>
          <a href={props.link} target="_blank" rel="noopener noreferrer" style={{color: "#087cba"}}> 
          <FontAwesomeIcon icon={faGithub} style={{marginRight:'5px', fontSize:'20px', color: "#087cba"}}/>
        Repository Link
        </a></div>
        </div>
      </div>

    {/* </a> */}

    
    </>
  );
};

export default CardP;
