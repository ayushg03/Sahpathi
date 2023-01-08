import React, { useState } from "react";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout";
import classes from "./Aboutus.module.css";
import "./Updates.css"
import sahpathilogo from "../../assets/44.jpg";
import ayush from "../../assets/a.png"

// import dev from "../../assets/Images/DevProfile.png";
import DevCard from "./DevCard";
import ContactUs from "../ContactUs/contactus";
import Modal from "../UserInterface/Modal/Modal";



// developer info object which contains the information of developers
let developerInfo = [
  {
    name: "Ayush Gupta",
    image: ayush,
    social: [
      "https://twitter.com/AyushGu75343194",
      "https://www.linkedin.com/in/ayushg03",
      "https://github.com/ayushg03",
    ],
  },
  
];

// Component to display the About us page
const AboutUs = () => {
  const [show,setshow]=useState(false);
  const showModal = () => {
    setshow(true);
  };
  const hideModal = () => {
    setshow(false);
};

  return (
    <BasicLayout>
      <div >
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
          {/* <br />
          <br />
          Thank you for choosing Sahpathi as your go-to source for academic support and information. 
          We are committed to helping you succeed and reach your full potential.   */}
        </div>
        <div className={classes.imagediv}>
          <img className={classes.img} src={sahpathilogo} alt="" />
        </div>
        </div>
      </div>

      <div className={classes.headerText}>The Trailblazer leading the Charge</div>

      {/* Map all developerInfo object's data to DevCard component to display data */}
      <div className={classes.CardRow}>
        {developerInfo.map((variable, index) => {
          return <DevCard varr={variable} key={index} />;
        })}
      </div>
      <h3 className={classes.headerText}>Release Notes</h3>
      <ul>
        <li className={classes.contact}><h3>v 1.0</h3></li>
        <div >
        <h3 className={classes.headerText2}>January 2023</h3>
        <ul >
          <li>Created branch & semester wise resources section.</li>
          <li>Option to contribute notes & other academic material.</li>
          <li>Get to know about upcoming events.</li>
          <li>SocialSpace to know about clubs & chapters.</li>

        </ul>
      </div>
      </ul>
      
      <div>
      <h4 className={classes.contact}>Let's Talk</h4>
      <div className={classes.row1}>
      <div><h3 className={classes.headerText1}>Contact Us </h3>
      </div>
      <button onClick={showModal} className={classes.show}>Reach out now</button>
      </div>
      <p className={classes.contact1}>Please feel free to give your feedback to our service. Your suggestions really helps us to improve. </p>
      </div>
      <Modal show={show} handleClose={hideModal}>
        <ContactUs/>
      </Modal>
         
      

    </BasicLayout>
  );
};

export default AboutUs;
