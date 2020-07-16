import React, { useContext } from "react";
import "./CharacterCard.scss";
import { CharacterContext } from '../../CharacterContext'

const CharacterCard = ({ character, characterBio, handleBioOpen, handleNameOpen }) => {
  const { firstName, lastName, subtitle } = character;
  const { bio } = characterBio;
  const { isNameOpen, isBioOpen, setIsNameOpen, setIsBioOpen } = useContext(CharacterContext);
  // console.log('context', characterContext)
  return (
    <div className={isNameOpen || isBioOpen ? 'card-container-dull' : 'card-container'}>
      <div className="card-header">
        <div className="avatar"></div>
        <div className="card-title" onClick={() => setIsNameOpen(!isNameOpen)}>
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card-body" onClick={() => setIsBioOpen(!isBioOpen)}>
        <h3>My bio:</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
