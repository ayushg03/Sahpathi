
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Events from "../components/Events/Events";
import Events1 from "../components/Events/Events1";
import Img from "../assets/12.jpg"
import Card from "../components/GlobalComponents/Card";
import { Button } from "react-scroll";
import BasicLayout1 from "../components/UserInterface/BasicCompPadding/BasicLayout";

function Home(props){
  return (
    <>
   {/* <Navbar/> */}
   <Hero 
   cName="hero"
   heroImg={Img}
   ID="home"
   title="Get access to"
   text="What are you waiting for?"
   buttonText="Get Started"
   url="/"
   link={props.link}
   btnClass="show"
   />

   <Events/>
   
   {/* <Card/> */}
   <Footer/>
   </>
  );
}

export default Home;
