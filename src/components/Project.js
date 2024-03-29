import React, { useState, useEffect } from "react";

const Project = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`projectcard ${props.link.class}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(props.link.link)}
    >
      {isHovered && windowWidth > 828 && (
        <div className="cardText">
            <div style={{display:"flex", justifyContent:"flex-start"}}>
                <p>{props.link.name}</p>
            </div>
            <a href={props.link.link}>Deployed App</a>
            <br />
            <a href={props.link.github}>GitHub Repository</a>
        </div>
      )}

      {windowWidth <= 828 && (
        <div className="cardTextSmall">
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