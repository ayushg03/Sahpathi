import React from "react";
import classes from "../Card/Card.module.css";
import paperImg from "../../assets/card.jpg";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import axios from 'axios';
var FileSaver = require('file-saver');

// Generate the card and display the content which is received from props
const Book1 = (props) => {

  return (
    //  add the id to the path
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/exams/${props.branch}/${props.sem}/${props.subject}`}
    >
      <div
        className={classes.Book}
        onClick={() => {
            Swal.fire({
                icon: 'info',
                // position: 'top',
                title: 'Download Started!',
                showConfirmButton: false,
                timer: 1200
              })
            axios({
                method: "GET",
                url: `/api/download/${props.id}`,
              })
                .then(response => {
                    window.open(response.data.download,"_parent");
                  
                })
                .then(() => {
                    // Swal.fire({
                    //     icon: 'success',
                    //     // position: 'top',
                    //     title: 'Download Completed!',
                    //     showConfirmButton: false,
                    //     timer: 1200
                    //   })
                  console.log("Completed");
                });
        }}
      >
        {/* {props.propp.match.params.id == "paper" ||
        props.propp.match.url.split("/")[5] == "paper" ? (
          <img className={classes.cardImage} src={paperImg}></img>
        ) : props.propp.match.params.id == "Books" ||
          props.propp.match.url.split("/")[5] == "Books" ? (
          <img className={classes.cardImage} src={bookImg}></img>
        ) : ( */}
          <img className={classes.cardImage} src={paperImg}></img>
        {/* )} */}
        <div className={classes.text}>
          <div className={classes.authorText}>{props.label}</div>
          <div className={classes.titleText}>{props.varr}</div>
          <div className={classes.descText}>{"Credits: "+props.author}</div>
        </div>
      </div>
    </Link>
  );
};

export default Book1;
