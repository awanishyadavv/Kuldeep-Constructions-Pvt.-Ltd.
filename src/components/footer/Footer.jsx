import React from "react";
import "./Footer.css";
import Facebook_img from "../../asstes/facebook-img.png";
import Instagram_img from "../../asstes/instagram-img.png";
import Linkedin_img from "../../asstes/linkedin-img.png";
import RPYLogo from '../../asstes/RpyLogo.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>&copy; Kuldeep Constructions Pvt. <br/> H.No-156, Zind Pur, Delhi, India, 110036 | All Rights reserved </p>
        <p className="footer-menu-links"><a href="">Privacy Policy</a> <a href="">Terms of Use</a><a href=""> Careers</a> <a href="">Contact</a></p>
      </div>
      <div className="footer-image">
        <a href="">
          <img src={Facebook_img} alt="" />
        </a>
        <a href="">
          <img src={Instagram_img} alt="" />
        </a>
        <a href="">
          <img src={Linkedin_img} alt="" />
        </a>
      </div>
      <div className="rpy-group">
        <img src={RPYLogo} alt="" />
        <p> Designed by RPY SOFTWARE <br />(An RPY Group Company)</p>
      </div>
    </div>
  );
};

export default Footer;
