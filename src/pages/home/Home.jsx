import React, { useEffect, useState } from "react";
import "./Home.css";
import Services from "../services/Services";
import ProjectSection from "../../components/project-section/ProjectSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [backgroundSize, setBackgroundSize] = useState(100); // Initial background size for landing and projects

  useEffect(() => {
    function handleScroll() {
      const newSize = 150 - window.pageYOffset / 12;
      setBackgroundSize(newSize > 0 ? newSize : 0); // Ensure size doesn't go below 0
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on component mount

  return (
    <>
    <div className="container-home">
      <div className="landing" style={{ backgroundSize: `${backgroundSize}%` }}>
        <div className="mask">
          <div className="home-content">
            <p>
              Transform your dream into reality with- <br/> our expert guidance.<br/> Build
              not just a house, but the perfect sanctuary <br/> you've always envisioned
            </p>
          </div>
          <div className="btn btn-primary home-btn">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="DesignValue">
        <div className="DesignValue-section">
          <div className="DesignValue-item left-content"><p>Design as a value</p></div>
          <div className="DesignValue-item right-image"></div>
        </div>
        <div className="DesignValue-section">
          <div className="DesignValue-item left-content-bottom">
            <p>Architectural text are used by architects in their designs and are all uniform block letters that are easy to read. This type of lettering was introduced by architects so long ago. The font chosen by the architect in his/her project plan an vital role.</p>
          </div>
          <div className="DesignValue-item right-content-bottom">
            <p>Architectural text are used by architects in their designs and are all uniform block letters that are easy to read. </p>
            <div className="btn btn-primary value-btn">
              <a href="/projects">Checkout our projects</a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-services">
        <Services/>
      </div>
      <div className="home-projects">
        <ProjectSection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default Home;
