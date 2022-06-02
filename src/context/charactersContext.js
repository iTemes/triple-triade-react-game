import React from "react";
import { useEffect, useState } from "react";

import CHARACTERS from "../constans/characters";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    firstLoadCharacters();
  }, []);

  useEffect(() => {
    const jsonCharacters = JSON.stringify(characters);
    localStorage.setItem("selectedCharacters", jsonCharacters);
  }, [characters]);

  const handleLikeClick = (id) => {
    setCharacters((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isLike: !item.isLike,
          };
        }

        return item;
      })
    );
  };

  const firstLoadCharacters = () => {
    const storageCharacters = localStorage.getItem("selectedCharacters");
    const parsedData = JSON.parse(storageCharacters);

    if (!parsedData?.length) {
      setCharacters(CHARACTERS);
      return;
    }

    setCharacters(parsedData);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        onLikeClick: handleLikeClick,
      }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const CharactersContext = React.createContext(null);
export default CharactersProvider;
