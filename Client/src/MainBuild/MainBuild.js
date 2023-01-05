import React from 'react'
import Home from '../routes/Home';
import { Route, Routes } from "react-router-dom";
import About from "../routes/About";
import Exams from "../routes/Exams";
import Social from "../routes/Social";
import Contribute from "../routes/Contribute";
import Subject from '../components/Academic/Subject';
import Material from '../routes/Material';

function MainBuild(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <Home link={props.onclick}/>}/> 
      <Route path="/about" element={ <About/>}/> 
      <Route path="/social" element={ <Social/>}/> 
      <Route path="/contribute" element={ <Contribute/>}/> 
      <Route
          path={"/exams/:branch/:sem"}
          element={ <Exams/>}
        />
        <Route path={"/exams/:branch/:sem/:subject"} element={<Material/>}/>
    </Routes>
    </div>
  )
}

export default MainBuild
