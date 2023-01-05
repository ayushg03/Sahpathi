import React from "react";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import "./Events1Style.css";
import "./EventsStyle.css";

// Dislay all fetched data in a user readable form
const Events1 = (props) => {
  return (
<div className={props.cName}>
  <div className="des-text">
    <div class="timeline">
      <div class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">{props.date}</p>
          
          <h3 className="title">{props.title}</h3>
          
          <h4 className="by">
            <strong>By : </strong>
            {props.author}
          </h4>
          <div>
            <strong>About : </strong>
            {props.desc}
          </div>
          <div className="timing">
            <strong>Timings : </strong>
            {props.time}
          </div>
          <div className="apply">
            <strong>Apply Link : </strong>
            <a class="link" href={props.link} target="_blank">
              Click Here
            </a>
            
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img alt="img" src={props.img1}/>
        {/* <img alt="img" src={props.img2}/> */}
      </div>
    </div>
    
  );
};

export default Events1;
