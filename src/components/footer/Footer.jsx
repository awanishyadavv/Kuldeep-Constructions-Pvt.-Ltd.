import React from "react";
import "./Footer.css";
import Facebook_img from "../../asstes/facebook-img.png";
import Instagram_img from "../../asstes/instagram-img.png";
import Linkedin_img from "../../asstes/linkedin-img.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>
          &copy; Kuldeep Constructions Pvt. Ltd - Toronto Canada 124, 3456
          canada | All Rights reserved <br /> Designed by Awanish Yadav +91
          8423678383 awanishyadavhoon@gmail.com <br /> Privacy Policy Terms of
          Use Careers Contact
        </p>
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
    </div>
  );
};

export default Footer;
