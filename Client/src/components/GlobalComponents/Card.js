import "./CardStyles.css";
import CardData from "./CardData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

function Card() {
  return (
    <div className="card">
      <h1>Loren Ipsum</h1>
      <p>Commodo sit ea velit ad labore occaecat laboris eiusmod. Quis consectetur Lorem nostrud magna laborum. Tempor mollit culpa incididunt exercitation laboris tempor cupidatat in id ex in nostrud veniam tempor.</p>
    <div className="cardData">
      <CardData
      image={Trip1}
      heading="Lorem Ipsum"
      text="Laborum officia pariatur tempor excepteur cillum ex pariatur sint nostrud voluptate. Sint voluptate ad veniam in sit tempor amet nostrud nisi eiusmod irure. Elit officia mollit consectetur est fugiat minim et. Ullamco consectetur esse nostrud laborum minim eu incididunt deserunt reprehenderit aliquip."
      />
      <CardData
      image={Trip1}
      heading="Lorem Ipsum"
      text="Laborum officia pariatur tempor excepteur cillum ex pariatur sint nostrud voluptate. Sint voluptate ad veniam in sit tempor amet nostrud nisi eiusmod irure. Elit officia mollit consectetur est fugiat minim et. Ullamco consectetur esse nostrud laborum minim eu incididunt deserunt reprehenderit aliquip."
      />
      <CardData
      image={Trip1}
      heading="Lorem Ipsum"
      text="Laborum officia pariatur tempor excepteur cillum ex pariatur sint nostrud voluptate. Sint voluptate ad veniam in sit tempor amet nostrud nisi eiusmod irure. Elit officia mollit consectetur est fugiat minim et. Ullamco consectetur esse nostrud laborum minim eu incididunt deserunt reprehenderit aliquip."
      />
    </div>
    
    </div>
  );
}

export default Card;
