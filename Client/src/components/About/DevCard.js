import React from "react";
import classes from "./Aboutus.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../GlobalComponents/LinkComponent/Linkcomponent";

// Display info of developers
const DevCard = (props) => {
  return (
    <div className={classes.profileCards}>
      <div>
        <img className={classes.profileImage} src={props.varr.image} alt="" />
      </div>

      <div>
        <div className={classes.profileName}>{props.varr.name}</div>

        {/* Display social accounts of developers */}
        <div className={classes.link}>
          <li className={classes.iconStyle}>
            <SocialLink link={props.varr.social[0]}>
              <FaTwitter size={20} />
            </SocialLink>
          </li>

          <li className={classes.iconStyle}>
            <SocialLink link={props.varr.social[1]}>
              <FaLinkedin size={20} />
            </SocialLink>
          </li>

          <li className={classes.iconStyle}>
            <SocialLink link={props.varr.social[2]}>
              <FaGithub size={20} />
            </SocialLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
