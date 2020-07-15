import React from 'react';
import './App.css';
import CharacterCard from './components/characters/CharacterCard';
import EditBioModal from './components/modals/EditBioModal';
import EditNameModal from './components/modals/EditNameModal';

function App() {
  return (
    <div className="App">
      <CharacterCard />
      <EditNameModal />
      <EditBioModal />
    </div>
  );
}

export default App;
