import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AboutUs from "../components/About/AboutUs";

function About() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero 
   cName="hero-mid"
   ID="other"
   title="About Us"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
   <AboutUs/>
    <Footer/>
    </>
  );
}

export default About;
