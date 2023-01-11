import React from 'react'
import Home from '../routes/Home';
import { Route, Routes } from "react-router-dom";
import About from "../routes/About";
import Exams from "../routes/Exams";
import Social from "../routes/Social";
import Social1 from '../routes/Social1';
import Contribute from "../routes/Contribute";
import Subject from '../components/Academic/Subject';
import Material from '../routes/Material';
import ScrollToTop from '../Scroll';
import Privacy from '../routes/Privacy';

function MainBuild(props) {
  return (
    <div>
       <ScrollToTop>
      <Routes>
        {/* <ScrollToTop> */}
      <Route path="/" element={ <Home link={props.onclick}/>}/> 
      <Route path="/about" element={ <About/>}/> 
      <Route path="/social" element={ <Social/>}/> 
      <Route path="/contribute" element={ <Contribute/>}/> 
      <Route
          path={"/exams/:branch/:sem"}
          element={ <Exams/>}
        />
        <Route path={"/exams/:branch/:sem/:subject"} element={<Material/>}/>
       
        <Route path={"/social/add"} element={<Social1/>}/>
        <Route path={"/privacy"} element={<Privacy/>}/>
      
        {/* </ScrollToTop> */}
    </Routes>
    </ScrollToTop>
    </div>
  )
}

export default MainBuild
