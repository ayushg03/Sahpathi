import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AddEvents from '../components/AddEvent/AddEvent';
import AddProject from '../components/AddEvent/AddProject';
function Project1() {
  return (
    <div>
        <Hero 
   cName="hero-mid"
   ID="other"
   title="Projects"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
   <AddProject/>
    <Footer/>
   </div>
    
  )
  }

export default Project1
