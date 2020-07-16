import React, { useState } from "react";
import "./App.css";
import CharacterCard from "./components/characters/CharacterCard";
import EditBioModal from "./components/modals/EditBioModal";
import EditNameModal from "./components/modals/EditNameModal";

function App() {
  const [characterDetails, setCharacterDetails] = useState({
    firstName: "Clark",
    lastName: "Kent",
    subtitle: "Definitely NOT Superman",
  });
  const [characterBio, setCharacterBio] = useState({
    bio:
      "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation.",
  });
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const handleNameOpen = () => {
    setIsNameOpen(!isNameOpen);
  };

  const handleBioOpen = () => {
    setIsBioOpen(!isBioOpen);
  };

  const handleNameSave = (values) => {
    setCharacterDetails({ ...values });
    setIsNameOpen(!isNameOpen);
  };

  const handleBioSave = (newBio) => {
    setCharacterBio({ ...newBio })
    setIsBioOpen(!isBioOpen)
  }

  return (
    <div className="App">
      <CharacterCard
        character={characterDetails}
        characterBio={characterBio}
        handleNameOpen={handleNameOpen}
        handleBioOpen={handleBioOpen}
        isBioOpen={isBioOpen}
        isNameOpen={isNameOpen}
      />
      <EditNameModal
        character={characterDetails}
        handleSave={handleNameSave}
        handleOpen={handleNameOpen}
        isOpen={isNameOpen}
      />
      <EditBioModal
        bio={characterBio}
        handleSave={handleBioSave}
        handleOpen={handleBioOpen}
        isOpen={isBioOpen}
      />
    </div>
  );
}

export default App;
