import React from "react";
import "./About.css";
import UnderMaintenance from "../../components/under-maintenance/UnderMaintenance";

const About = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-heading">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          praesentium ut sint iusto veritatis cumque, autem eos quam eaque illum
          enim esse ex fugit excepturi asperiores? Eveniet non alias ea.
        </p>
      </div>
      <div className="aboutus-vision">
        <div className="vision-image"></div>
        <div className="vision-content">
          <h2>Our Purpose</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            culpa incidunt voluptate ut consequatur veritatis nemo minus
            mollitia nostrum, saepe odio aut odit et amet ratione dolores facere
            dolore est!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laborum dicta dolore necessitatibus? Odit libero iste
            assumenda, deleniti nesciunt, quas delectus veritatis, distinctio
            aliquam mollitia exercitationem. Quia minus in voluptatum facere?
          </p>
        </div>
      </div>
      <div className="aboutus-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            culpa incidunt voluptate ut consequatur veritatis nemo minus
            mollitia nostrum, saepe odio aut odit et amet ratione dolores facere
            dolore est!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laborum dicta dolore necessitatibus? Odit libero iste
            assumenda, deleniti nesciunt, quas delectus veritatis, distinctio
            aliquam mollitia exercitationem. Quia minus in voluptatum facere?
          </p>
        </div>
        <div className="mission-image"></div>
      </div>
      <div className="aboutus-contact">
        <h1>Details</h1>
        <div className="detail-container">
          <table className="aboutus-table">
            <thead className="aboutus-thead">
              <tr className="aboutus-headings">
                <th className="column1">S.No</th>
                <th className="column2">Item</th>
                <th className="column3">Description</th>
              </tr>
            </thead>
            <tbody className="aboutus-thead">
              <tr>
                <td className="column1">1</td>
                <td className="column2">Company Name</td>
                <td className="column3">Kuldeep Construction</td>
              </tr>
              <tr>
                <td className="column1">2</td>
                <td className="column2">Registration No.</td>
                <td className="column3">07690431985</td>
              </tr>
              <tr>
                <td className="column1">3</td>
                <td className="column2">PAN No.</td>
                <td className="column3">CIEPK5242G</td>
              </tr>
              <tr>
                <td className="column1">4</td>
                <td className="column2">GST No.</td>
                <td className="column3">07CIEPK5242G2ZD</td>
              </tr>
              <tr>
                <td className="column1">5</td>
                <td className="column2">Telephone No.</td>
                <td className="column3">+917087124227</td>
              </tr>
              <tr>
                <td className="column1">6</td>
                <td className="column2">Fax Address.</td>
                <td className="column3"></td>
              </tr>
              <tr>
                <td className="column1">7</td>
                <td className="column2">Email Address</td>
                <td className="column3">KULDEEPSISODIA91@GMAIL.COM</td>
              </tr>
              <tr>
                <td className="column1">8</td>
                <td className="column2">Physical address</td>
                <td className="column3"></td>
              </tr>
              <tr>
                <td className="column1">8</td>
                <td className="column2">Postal address</td>
                <td className="column3">
                  H.NO-156, Village Zindpur, Delhi, India, 110036
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
