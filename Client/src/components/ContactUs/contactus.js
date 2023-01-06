import React, { useState, useEffect } from "react";
import "./contactus.css";
import "../Layout/Layout"
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
    // e.preventDefault();
    // if (name == "") {
    //   setError("Name can't be null");
    // } else if (email == "") {
    //   setError("Email can't be null");
    // } else if (message == "") {
    //   setError("Message can't be null");
    // } else {
      // setLoader(true);
      // db.collection("contacts")
      //   .add({
      //     name: name,
      //     email: email,
      //     message: message,
      //   })
      //   .then(() => {
      //     setLoader(false);
      //     alert("Your message has been submitted👍");
      //   })
      //   .catch((error) => {
      //     alert(error.message);
      //     setLoader(false);
      //   });

      // set all field null for next response(after uploading the first one)
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    //   setError("");
    // }
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
            // style={{ background: loader ? "#ccc" : " rgb(14, 146, 163);" }}
          >
            Submit
          </button>
        </form>
      </div>

  );
};

export default ContactUs;
