import React from "react";
import "./App.css";
import CharacterCard from "./components/characters/CharacterCard";
import EditModal from "./components/modals/EditModal";
import CharacterContextProvider from "./CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <div className="App">
        <CharacterCard />
        <EditModal />
      </div>
    </CharacterContextProvider>
  );
}

export default App;
