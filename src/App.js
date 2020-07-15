import React, { useState } from 'react';
import './App.css';
import CharacterCard from './components/characters/CharacterCard';
import EditBioModal from './components/modals/EditBioModal';
import EditNameModal from './components/modals/EditNameModal';

function App() {
  const [character, setCharacter] = useState({
    firstName: 'Clark',
    lastName: 'Kent',
    subtitle: 'Definitely NOT Superman',
    bio: "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation."
  });
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [isEditBioOpen, setisEditBioOpen] = useState(false)

  const handleOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="App">
      <CharacterCard character={character} handleOpen={handleOpen} />
      <EditNameModal handleOpen={handleOpen} isOpen={isModalOpen} />
      <EditBioModal handleOpen={handleOpen} isOpen={isModalOpen} />
    </div>
  );
}

export default App;
