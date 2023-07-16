import React, { useState } from "react";

const Project = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className={`projectcard ${props.link.class}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(props.link.link)}
    >
      {isHovered && (
        <div className="cardText">
            <div style={{display:"flex", justifyContent:"flex-start"}}>
                <p>{props.link.name}</p>
            </div>
            <a href={props.link.link}>Deployed App</a>
            <br />
            <a href={props.link.github}>GitHub Repository</a>
        </div>
      )}
    </section>
  );
};

export default Project