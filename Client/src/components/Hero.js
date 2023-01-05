import "./HeroStyles.css";
import {Typewriter} from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
const Hero = (props)=> {
  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }
  return (
    <>
      <div className={props.cName}>
      
    
      <div className="hero-text">
      <h1 >{props.title+' '}
              <span id={props.ID}>
                
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={200}
                  delaySpeed={1000}
                  words={["Notes","PYQs","Books","Projects!"]}
                />
               
              </span>
            </h1>
        <p>{props.text}</p>
        <Link onClick={props.link} className={props.btnClass}>
          {props.buttonText}
        </Link>
      </div>
      </div>
     
    </>
  );
}

export default Hero;
