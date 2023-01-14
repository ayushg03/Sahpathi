import { Component, useState } from "react";
import "./NavbarStyles.css";
import logo from '../../assets/p.png';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar=(props)=> {
const [clicked,setClick]=useState(false);
const handleClick=()=>{
  setClick(!clicked);
}


    return (
      <nav className="NavbarItems">
        <a href="/"><h1 className="navbar-logo" href="/">Sahpathi</h1></a>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked?"fas fa-times":"fas fa-bars"}></i>

        </div>
        <ul className={clicked?"nav-menu active":"nav-menu"}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index} onClick={handleClick}>
              <Link className={item.cName} onClick={item.bt?props.onclick:()=>{}}
              to={item.url}>
              <i className={item.icon}></i>{item.title}</Link>
            </li>
            )
          })}
          {/* <button onClick={props.onclick}>Get Started</button> */}
        </ul>
      </nav>
    );

}

export default Navbar;
