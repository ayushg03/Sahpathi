import Mountain1 from "../../assets/14.jpg";
import Mountain2 from "../../assets/13.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import "./EventsStyle.css";
import Events1 from "./Events1";

const Events = () => {
  return (
    <div className="event">
     <h1>Upcoming Events</h1>
    <Events1
    cName="first-des"
    title="Event Title"
    desc="Qui exercitation tempor sint minim culpa sunt. Consequat ullamco nisi quis aliqua occaecat voluptate sint elit esse commodo culpa cillum id aute. Do cupidatat enim pariatur pariatur Lorem eiusmod nostrud elit laborum ullamco. Nulla qui voluptate incididunt esse ea. Non do incididunt voluptate nulla aute consequat commodo officia. Velit incididunt voluptate aliquip veniam fugiat aliquip consectetur."
    date="15 January,2023"
    author="Chapter Name"
    link="/"
    time="10 PM to 11 PM"
    img1={Mountain1}
    img2={Mountain2}
    />
    <Events1
    cName="first-des-reverse"
    title="Event Title"
    desc="Qui exercitation tempor sint minim culpa sunt. Consequat ullamco nisi quis aliqua occaecat voluptate sint elit esse commodo culpa cillum id aute. Do cupidatat enim pariatur pariatur Lorem eiusmod nostrud elit laborum ullamco. Nulla qui voluptate incididunt esse ea. Non do incididunt voluptate nulla aute consequat commodo officia. Velit incididunt voluptate aliquip veniam fugiat aliquip consectetur."
    date="15 January,2023"
    author="Chapter Name"
    link="/"
    time="10 PM to 11 PM"
    img1={Mountain1}
    img2={Mountain2}
    />
    </div>
  );
};

export default Events;
