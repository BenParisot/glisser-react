import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character, characterBio, handleBioOpen, handleNameOpen, isBioOpen, isNameOpen }) => {
  const { firstName, lastName, subtitle } = character;
  const { bio } = characterBio;
  return (
    <div className={isNameOpen || isBioOpen ? 'card-container-dull' : 'card-container'}>
      <div className="card-header">
        <div className="avatar"></div>
        <div className="card-title" onClick={handleNameOpen}>
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card-body" onClick={handleBioOpen}>
        <h3>My bio:</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
