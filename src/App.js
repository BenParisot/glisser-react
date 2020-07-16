import React from "react";
import "./App.scss";
import CharacterCard from "./components/characters/CharacterCard";
import EditModal from "./components/modals/EditModal";
import CharacterContextProvider from "./CharacterContext";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

function App() {
  return (
    <CharacterContextProvider>
      <Header />
      <CharacterCard />
      <EditModal />
      <Footer />
    </CharacterContextProvider>
  );
}

export default App;
