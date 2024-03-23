import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <h1>Expertise</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          similique laboriosam labore itaque? Quaerat quibusdam cupiditate
          veniam quia minima ipsum, mollitia beatae fugit non soluta nemo
          eveniet et iste explicabo.
        </p>{" "}
      </div>
      <div className="services-sub-container">
        <div className="services-rows">
          <div className="row-content">
            <h1>Building Construction</h1>
          </div>
          <div className="row-image img1"></div>
        </div>
        <div className="services-rows">
          <div className="row-image img2"></div>
          <div className="row-content">
            <h1>Brick Work</h1>
          </div>
        </div>
        <div className="services-rows">
          <div className="row-content">
            <h1>Road Work</h1>
          </div>
          <div className="row-image img3"></div>
        </div>
        <div className="services-rows">
          <div className="row-image img4"></div>
          <div className="row-content">
            <h1>ESR Project</h1>
          </div>
        </div>
        <div className="services-rows">
          <div className="row-content">
            <h1>Pipe Line Excavation</h1>
          </div>
          <div className="row-image img5"></div>
        </div>
        <div className="services-rows">
          <div className="row-image img6"></div>
          <div className="row-content">
            <h1>RCC</h1>
          </div>
        </div>
        <div className="services-rows">
          <div className="row-content">
            <h1>Flexible Pavement</h1>
          </div>
          <div className="row-image img7"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
