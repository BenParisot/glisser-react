import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character, handleOpen }) => {
  const { firstName, lastName, subtitle, bio } = character;
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="avatar"></div>
        <div className="card-title" onClick={handleOpen}>
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card-body" onClick={handleOpen}>
        <h3>My bio:</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
