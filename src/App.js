import React from "react";
import "./App.css";
import CharacterCard from "./components/characters/CharacterCard";
import EditBioModal from "./components/modals/EditBioModal";
import EditNameModal from "./components/modals/EditNameModal";
import CharacterContextProvider from "./CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <div className="App">
        <CharacterCard />
        <EditNameModal />
        <EditBioModal />
      </div>
    </CharacterContextProvider>
  );
}

export default App;
