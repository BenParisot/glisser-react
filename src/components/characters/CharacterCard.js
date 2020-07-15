import React from "react";
import "./CharacterCard.scss";

const CharacterCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="avatar"></div>
        <div className="card-title">
          <h1>Clark Kent</h1>
          <h2>Definitely NOT Superman</h2>
        </div>
      </div>
      <div className="card-body">
        <h3>My bio:</h3>
        <p>I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation.</p>
      </div>
    </div>
  );
};

export default CharacterCard;
