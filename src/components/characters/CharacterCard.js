import React, { useContext } from "react";
import "./CharacterCard.scss";
import { CharacterContext } from '../../CharacterContext'

const CharacterCard = () => {
  const { character, isNameOpen, isBioOpen, setIsNameOpen, setIsBioOpen } = useContext(CharacterContext);
  return (
    <div className={isNameOpen || isBioOpen ? 'card-container-dull' : 'card-container'}>
      <div className="card-header">
        <div className="avatar"></div>
        <div className="card-title" onClick={() => setIsNameOpen(!isNameOpen)}>
          <h1>
            {character.firstName} {character.lastName}
          </h1>
          <h2>{character.subtitle}</h2>
        </div>
      </div>
      <div className="card-body" onClick={() => setIsBioOpen(!isBioOpen)}>
        <h3>My bio:</h3>
        <p>{character.bio}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
