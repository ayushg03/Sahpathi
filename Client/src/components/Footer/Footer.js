import "./FooterStyles.css";
import owasp from '../../assets/13.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
      <div>
        <h1>Sahpathi</h1>
        <p>The Socio-Academic Portal of RGIPT.</p>
      </div>
      <div>
        <a href="https://github.com/ayushg03">
          <i className="fa-brands fa-square-github">

          </i>
        </a>
        <a href="https://www.linkedin.com/in/ayushg03/">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/20746516/ayush">
        <i class="fa-brands fa-stack-overflow"></i>
        </a>
        <a href="https://twitter.com/AyushGu75343194">
        <i class="fa-brands fa-square-twitter"></i>
        </a>
      </div>
      </div>
      <div className="bottom">
       <div>
        <h4>Information</h4>
        <Link to="/privacy">Privacy Policy</Link>
        <a href="mailto:sahpathi03@gmail.com">Contact Us</a>
       </div>
       <div>
        <h4>Powered By</h4>
        <a href="https://owasp.org/www-chapter-rajiv-gandhi-institute-of-petroleum-technology/#"><img src={owasp}/></a>
       </div>
      </div>
     <div>© 2023 Sahpathi. All rights reserved.</div>
    </div>
  );
};

export default Footer;
