import React from "react";
import "./Projects.css";
import UnderMaintenance from "../../components/under-maintenance/UnderMaintenance";


const Projects = () => {
  return (
    <div className="project-page-container">
      <div className="projects-heading">
        <h1>Our Latest Projects</h1>
        <p>
          We use high quality of raw material. Our commitement to innovation and
          excellence invariably results in a successfully completed for both
          contractor and client.
        </p>
      </div>
      {/* dsfffffffffffffffffffffffff */}
      <div className="project-container">
        <div className="project-card-container">
          <div className="project-card-image image1"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Wall Precast </div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image2"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Utility Transfer Station-SWM</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image3"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Elevated Storage Reservoir</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image4"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Surface water drain/sewer </div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image5"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Building Construction</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image6"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Embankment & Granular sub base</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image7"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Road Construction</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div> 
          </div>
        </div>
        <div className="project-card-container">
          <div className="project-card-image image8"> {/* Image given in css as background*/}
            <div className="overlay">
              <div className="project-name">Pipeline Excavation</div>
              {/* <div className="btn btn-primary"><a href="">View Details</a></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* fsghukshfjsd */}
      <div className="btn btn-primary">
        <a href="">All Projects</a>
      </div>
    </div>
  );
};

export default Projects;
