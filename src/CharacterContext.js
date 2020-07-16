import React, { createContext, useState } from "react";

export const CharacterContext = createContext({
  firstName: "",
  lastName: "",
  subtitle: "",
  bio: "",
  key: "",
});

const CharacterContextProvider = (props) => {
  const { children } = props;
  const [character, setCharacter] = useState({
    firstName: "Clark",
    lastName: "Kent",
    subtitle: "Definitely NOT Superman",
    bio:
      "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation.",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState("");

  const updateCharacter = (newValues) => {
    setCharacter({ ...character, ...newValues });
    setIsOpen(!isOpen);
  };

  const handleModalToggle = (key) => {
    setKey(key);
    setIsOpen(!isOpen);
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        updateCharacter,
        isOpen,
        setIsOpen,
        key,
        handleModalToggle,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
