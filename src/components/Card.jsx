import React from "react";
import "../styles/card.css";

const FacultyCard = ({ name, title, curriculum, imageUrl }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-image-container">
        <img
          src={
            imageUrl ||
            `https://avatar.iran.liara.run/username?username=${
              name.split(" ")[0]
            }+${name.split(" ")[1]}`
          }
          alt={name}
          className="faculty-image"
        />
      </div>
      <div className="faculty-info">
        <h2 className="faculty-name">{name}</h2>
        <p className="faculty-title">{title}</p>
        <div className="faculty-curriculum">
          <h3>Curriculum topics</h3>
          <p>{curriculum}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
