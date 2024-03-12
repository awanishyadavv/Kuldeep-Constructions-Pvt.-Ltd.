import React, { useEffect, useState, useRef } from "react";
import './ProjectSection.css';

const ProjectSection = () => {
  const [backgroundSize, setBackgroundSize] = useState(150); // Initial background size
  const projectRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (projectRef.current) {
        const boundingRect = projectRef.current.getBoundingClientRect();
        const newBackgroundSize = 100 + (boundingRect.top / window.innerHeight) * 100; // Invert the calculation
        setBackgroundSize(newBackgroundSize < 150 ? newBackgroundSize : 150); // Ensure size doesn't exceed 150
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='project-section' ref={projectRef} style={{ backgroundSize: `${backgroundSize}%` }}>
        <div className="project-section-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa, aperiam placeat beatae in vitae sapiente saepe animi id dolorem, a hic, ex nostrum quod! Quis omnis voluptates expedita officiis!</p>
            <div className="btn btn-primary value-btn">
              <a href="/contact">Our Projects</a>
            </div>
        </div>
    </div>
  );
};

export default ProjectSection;
