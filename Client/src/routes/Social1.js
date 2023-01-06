import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AddEvents from '../components/AddEvent/AddEvent';
function Social1() {
  return (
    <div>
        <Hero 
   cName="hero-mid"
   ID="other"
   title="Social Space"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
   <AddEvents/>
    <Footer/>
   </div>
    
  )
  }

export default Social1
