import "./FooterStyles.css";
import owasp from '../../assets/13.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
      <div>
        <h1>Sahpathi</h1>
        <p>The Socio-Academic Portal of RGIPT.</p>
      </div>
      <div>
        <a href="/">
          <i className="fa-brands fa-square-github">

          </i>
        </a>
        <a href="/">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="/">
        <i class="fa-brands fa-stack-overflow"></i>
        </a>
        <a href="/">
        <i class="fa-brands fa-square-twitter"></i>
        </a>
      </div>
      </div>
      <div className="bottom">
       <div>
        <h4>Information</h4>
        <a href="/">Privacy Policy</a>
        <a href="/">Contact Us</a>
       </div>
       <div>
        <h4>Powered By</h4>
        <a href="/"><img src={owasp}/></a>
       </div>
      </div>
    </div>
  );
};

export default Footer;
