import React from "react";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout";
import classes from "./Aboutus.module.css";
import "./Updates.css"
import sahpathilogo from "../../assets/9.jpg";
import ayush from "../../assets/a.png"

// import dev from "../../assets/Images/DevProfile.png";
import DevCard from "./DevCard";



// developer info object which contains the information of developers
let developerInfo = [
  {
    name: "Ayush Gupta",
    image: ayush,
    social: [
      "https://www.linkedin.com/in/ayushg03",
      "https://www.linkedin.com/in/ayushg03",
      "https://github.com/ayushg03",
    ],
  },
  
];

// Component to display the About us page
const AboutUs = () => {
  return (
    <BasicLayout>
      <div className={classes.row}>
        <div className={classes.content}>
        Welcome to Sahpathi, the socio-academic portal of RGIPT!<br/>
        At Sahpathi, we are dedicated to providing you with the resources and support you need to thrive in your studies and reach your full potential.
        With a vast collection of notes, books, PYQs, and projects at your fingertips, you'll have everything you need to excel in your coursework. 
        We are constantly updating our library with the latest and most relevant materials, so you can stay ahead of the curve and achieve your academic goals.
        <br />
        But we don't just offer resources for your studies - we also keep you informed about what's happening on campus. 
        From guest lectures and workshops to chapter events and more, we make sure you never miss out on an opportunity to get involved and make 
        your social presence at RGIPT.
          <br />
          <br />
          Thank you for choosing Sahpathi as your go-to source for academic support and information. 
          We are committed to helping you succeed and reach your full potential.
        </div>
        <div className={classes.imagediv}>
          <img className={classes.img} src={sahpathilogo} alt="" />
        </div>
      </div>

      <div className={classes.headerText}>The Trailblazer leading the Charge</div>

      {/* Map all developerInfo object's data to DevCard component to display data */}
      <div className={classes.CardRow}>
        {developerInfo.map((variable, index) => {
          return <DevCard varr={variable} key={index} />;
        })}
      </div>
      <div className={classes.headerText}>Release notes</div>
      <div >
        <h1 className={classes.headerText}>January 2023</h1>
        <ul >
          <li>Created branch & semester wise resources section.</li>
          <li>Option to contribute notes & other academic material.</li>
          <li>Get to know about upcoming events.</li>
          <li>SocialSpace to know about clubs & chapters.</li>

        </ul>
      </div>

    </BasicLayout>
  );
};

export default AboutUs;
