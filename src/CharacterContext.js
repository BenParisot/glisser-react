import React, { createContext, useState } from "react";

export const CharacterContext = createContext({
  firstName: "",
  lastName: "",
  subtitle: "",
  bio: "",
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
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const updateCharacter = (newValues, key) => {
    setCharacter({ ...character, ...newValues });
    key === "bio"
      ? setIsBioOpen(!isBioOpen)
      : setIsNameOpen(!isNameOpen);
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        updateCharacter,
        isNameOpen,
        setIsNameOpen,
        isBioOpen,
        setIsBioOpen,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
