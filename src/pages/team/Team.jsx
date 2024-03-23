import React from "react";
import "./Team.css";
import TeamImage from "../../asstes/teamImage.jpg";
import Image1 from "../../asstes/8.png";
import Image2 from "../../asstes/2.png";
import Image3 from "../../asstes/3.png";
import Image4 from "../../asstes/4.png";
import Image5 from "../../asstes/5.png";
import Image6 from "../../asstes/6.png";
import Image7 from "../../asstes/7.png";

const Team = () => {
  return (
    <div className="container-Team">
      <div className="team-heading">
        <h1>Our leadership Team</h1>
        <p>
          With over 15 years of combined experience, we have got a well seasoned
          team at helm
        </p>
      </div>
      <div className="team-container">
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image1} alt="" />
            <div className="overlay overlay4">
              <div className="text">M.Tech Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Kuldeep Sisodia</h2>
            <p>Managemating Director</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image2} alt="" />
            <div className="overlay overlay2">
              <div className="text">B.Tech Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Nitish Wadera</h2>
            <p>QA/QC</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image3} alt="" />
            <div className="overlay overlay3">
              <div className="text">B.Tech Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Rajesh Sharma</h2>
            <p>Const. Engg</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image4} alt="" />
            <div className="overlay overlay4">
              <div className="text">B.Tech Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Satrugan Gupta</h2>
            <p>Const. Engg</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image5} alt="" />
            <div className="overlay overlay2">
              <div className="text">B.Tech Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Nishant</h2>
            <p>Planning Eng.</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image6} alt="" />
            <div className="overlay overlay3">
              <div className="text">Diploma Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Rajesh Singh</h2>
            <p>Tech. Superv.</p>
          </div>
        </div>
        <div className="team-card-container">
          <div className="team-card-image">
            <img src={Image7} alt="" />
            <div className="overlay overlay4">
              <div className="text">Diploma Civil</div>
            </div>
          </div>
          <div className="team-card-content">
            <h2>Satveer Singh</h2>
            <p>Lab Tech.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
