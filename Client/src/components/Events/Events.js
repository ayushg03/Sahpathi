import Mountain1 from "../../assets/14.jpg";
import Mountain2 from "../../assets/13.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import "./EventsStyle.css";
import axios from 'axios';
import Events1 from "./Events1";
import { useEffect, useState } from "react";

const Events = () => {
  const [data,setData]=useState(null);

  const getEvents = async () => {
    try {
      const response1 = await axios.get('/api/event');
      await axios.get(`/api/download/${response1.data?.[0]?.id}`); //this api will make the id to be visible if anyone has the link
      await axios.get(`/api/download/${response1.data?.[1]?.id}`);
      setData(response1.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event">
     <h1>Upcoming Events</h1>
    <Events1
    cName="first-des"
    title={data?.[0]?.title ?data?.[0]?.title:"Event Title"}
    desc={data?.[0]?.desc ? data?.[0]?.desc : "Qui exercitation tempor sint minim culpa sunt. Consequat ullamco nisi quis aliqua occaecat voluptate sint elit esse commodo culpa cillum id aute. Do cupidatat enim pariatur pariatur Lorem eiusmod nostrud elit laborum ullamco. Nulla qui voluptate incididunt esse ea. Non do incididunt voluptate nulla aute consequat commodo officia. Velit incididunt voluptate aliquip veniam fugiat aliquip consectetur."}
    date={data?.[0]?.date ? data?.[0]?.date : "15 January,2023"}
    author={data?.[0]?.author ? data?.[0]?.author : "Chapter Name"}
    link={data?.[0]?.link ? data?.[0]?.link : '/'}
    time={data?.[0]?.timing ? data?.[0]?.timing : "Will be notified"}
    img1={data?.[0]?.id ? `https://drive.google.com/thumbnail?id=${data?.[0]?.id}` : Mountain1}
    img2={Mountain2}
    />
    {data?.[1]?.title && (
    <Events1
    cName="first-des-reverse"
    title={data?.[1]?.title ?data?.[1]?.title:"Event Title"}
    desc={data?.[1]?.desc ? data?.[1]?.desc : "Qui exercitation tempor sint minim culpa sunt. Consequat ullamco nisi quis aliqua occaecat voluptate sint elit esse commodo culpa cillum id aute. Do cupidatat enim pariatur pariatur Lorem eiusmod nostrud elit laborum ullamco. Nulla qui voluptate incididunt esse ea. Non do incididunt voluptate nulla aute consequat commodo officia. Velit incididunt voluptate aliquip veniam fugiat aliquip consectetur."}
    date={data?.[1]?.date ? data?.[1]?.date : "15 January,2023"}
    author={data?.[1]?.author ? data?.[1]?.author : "Chapter Name"}
    link={data?.[1]?.link ? data?.[1]?.link : '/'}
    time={data?.[1]?.timing ? data?.[1]?.timing : "Will be notified"}
    img1={data?.[1]?.id ? `https://drive.google.com/thumbnail?id=${data?.[1]?.id}` : Mountain1}
    img2={Mountain2}
    />
    )}
    </div>
  );
};

export default Events;
