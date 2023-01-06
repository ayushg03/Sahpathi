import React from "react";
import "./aboutclubs.css";
import classes from "../About/Aboutus.module.css";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout";
import { Link } from "react-router-dom";

// Display the information about the clubs
const aboutdept = () => {
  return (
    <BasicLayout>
      <h1>...</h1>
      <div className="blog-card">
        <div className="meta">
          <div className="photo"></div>
        </div>
        <div className="description">
          <h1>
            <b>OWASP RGIPT</b>
          </h1>
          <h2>Open Web Application Security Project</h2>
          <p>
            {" "}
            The Open Web Application Security Project (OWASP) is a foundation that works to improve the security of software.
             All of our projects ,tools, documents, forums, and chapters are free and open to anyone interested in improving application security.
             Any application development is incomplete without security integration in the present world. 
             OWASP RGIPT aims to build an environment on the campus that produces coders and developers who understand and meet the needs of the present world.
             We strive to promote the DevSecOps in the institute!
          </p>
          <p className="read-more">
            <a target="_blank" href="https://owasp.org/www-chapter-rajiv-gandhi-institute-of-petroleum-technology/#">Read More</a>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div className="photo1"></div>
        </div>
        <div className="description">
          <h1>
            <b>RGIPT ACM SC</b>
          </h1>
          <h2>Association for Computing Machinery</h2>
          <p>
          The vision of ACM student chapter is to improve the learning environment for the students in the field of computing.
           It fosters the students to become an influential and decorated professional. 
           The vision is promoted by offering plethora of activities to improve the skills of students in the field of computing and 
           help them redefine the technological artefacts.
          </p>
          <p className="read-more">
            <a target="_blank" href="https://rgipt.hosting2.acm.org/">
              Read More
            </a>
          </p>
        </div>
      </div>

      <div className="blog-card">
        <div className="meta">
          <div className="photo2"></div>
        </div>
        <div className="description">
          <h1>
            <b>IEEE Student Branch</b>
          </h1>
          <h2>Advancing Technology for Humanity</h2>
          <p>
            {" "}
            IEEE Student Branch of RGIPT Amethi will seek to enhance the learning experience of the student community on the RGIPT Amethi campus.
             The Student Branch will be focusing on conducting social and technical activities for students, and also encouraging the students to
              take full advantage of the benefits of IEEE membership, including scholarships, competitions, and conference grants. 
              The Student Branch will provide opportunities for students to network with peers in other institutes, academicians, professionals, 
              engineers, and scientists through the on campus IEEE Student Branch and the Local IEEE Section, thereby encouraging students to be 
              a part of the global IEEE community.
          </p>
          <p className="read-more">
            <a target="_blank" href="https://edu.ieee.org/in-rgipt/">Read More</a>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div className="photo3"></div>
        </div>
        <div className="description">
          <h1>
            <b>Codechef RGIPT SC</b>
          </h1>
          <h2>Coding for a better tomorrow.</h2>
          <p>
          We are a community of student developers and aspiring computer scientists who are passionate about solving coding challenges
           and improving our skills. Our chapter hosts regular coding sessions, workshops, and other events to help our members learn
            and grow as programmers.We are always looking for new members to join our community, so if you are interested in coding and want to 
            meet like-minded students, we encourage you to get involved. Let's code together and make a difference!"
          </p>
          <p className="read-more">
            <a target="_blank" href="https://www.linkedin.com/company/codechef-rgipt-student-chapter/">Read More</a>
          </p>
        </div>
      </div>
      <h1>...</h1>
      <div className={classes.row1}>
      <div><h3 className={classes.headerText1}>Add more chapters or upcoming events.</h3>
      </div>
      <Link to="/social/add" className={classes.show}>Add now</Link>
      </div>
      <div>
      <p className={classes.contact1}>*For Student Chapters/Clubs use only.</p>
      </div>
      
    </BasicLayout>
  );
};

export default aboutdept;
