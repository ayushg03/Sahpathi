import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Book from "../components/Card/Card";
import BasicLayout1 from "../components/UserInterface/BasicCompPadding/BasicLayout1";
import Subject from "../components/Academic/Subject";
import Notes from '../components/Academic/Notes';
import NewNotes from '../components/Academic/NewNotes';
import Project from '../components/Academic/Project';

function Projects() {
  return (
    <div>
 
   {/* <Navbar/> */}
   <Hero 
   cName="hero-mid"
   ID="other"
   title="Projects"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
   <BasicLayout1>
    {/* <Notes/> */}
    <Project/>
   </BasicLayout1>
 
   <Footer/>
    </div>
  )
}

export default Projects
