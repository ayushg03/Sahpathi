import "./HeroStyles.css";
import {Typewriter} from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { useEffect, useState } from "react";
const Hero = (props)=> {
  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: isMobile ? 'column' : 'row', gap: '10px' }}>
  <Link onClick={props.link} className={props.btnClass}>
    {props.buttonText}
  </Link>
  <Link to="/newuploads" className={props.btnClass1?props.btnClass1:props.btnClass}>
    New Uploads
  </Link>
</div>

      </div>
      </div>
     
    </>
  );
}

export default Hero;
