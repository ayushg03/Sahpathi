import React, { useState, useEffect } from "react";
import "./contactus.css";
import "../Layout/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout";

// Contact us page
const ContactUs = () => {

  // all react useState hooks for state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState("");
  // const [loader, setLoader] = useState(false);

  // review the validation and upload the message
  const handleSubmit = (e) => {
   
    if (name == "") {
      Swal.fire({
        icon: 'error',
        // position: 'top',
        title: 'Oops...',
        text: "Name can't be null",
        showConfirmButton: false,
        timer: 1200
      })
    }
    else if (email == "") {
      Swal.fire({
        icon: 'error',
        // position: 'top',
        title: 'Oops...',
        text: "Email can't be null",
        showConfirmButton: false,
        timer: 1200
      })
    }
    else if (message == "") {
      Swal.fire({
        icon: 'error',
        // position: 'top',
        title: 'Oops...',
        text: "Message can't be null",
        showConfirmButton: false,
        timer: 1200
      })
    }
     else {
      const subject="Thanks for contacting us!"
      const reply="Thanks for contacting us! This auto-reply is just to let you know that we have received your email and will get back to you with a (human) response as soon as possible."
      const fd = new FormData();
      fd.append('to',email);
      fd.append('subject',subject);
      fd.append('message',message);
      fd.append('reply',reply);
      fd.append('name',name);
      const response= axios.post(`/api/send`,fd);
      console.log(response);

      // set all field null for next response(after uploading the first one)
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (

      <div className="contactus">
        <form className="form" onSubmit={handleSubmit}>
          {/* {error !== "" ? <span style={{ color: "red" }}>{error}</span> : ""} */}
          
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

         
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
          className="buttonStyle"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

  );
};

export default ContactUs;
