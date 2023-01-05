
import Hero from "../components/Hero";
import BasicLayout from "../components/UserInterface/BasicCompPadding/BasicLayout";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AddNotes from "../components/ContriNotes/AddNotes";

function Contribute() {
  return (
    <div>
   {/* <Navbar/> */}
   <Hero 
   cName="hero-mid"
   ID="other"
   title="Contribute"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
   <AddNotes/>
   <Footer/>
   </div>
  );
}

export default Contribute;
