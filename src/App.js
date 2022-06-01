import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Biography from "./pages/Biography/Biography";
import Characters from "./pages/Characters/Characters";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/LoginFormLayout";

import { CharactersContext } from "./context/charactersContext";

import CHARACTERS from "./constans/characters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    updateCharacters();
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

  const updateCharacters = () => {
    const storageCharacters = localStorage.getItem("selectedCharacters");

    if (!storageCharacters || !storageCharacters.length) {
      setCharacters(CHARACTERS);
      return;
    }

    setCharacters(JSON.parse(storageCharacters));
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        onLikeClick: handleLikeClick,
      }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />

          <Route path="characters/:characterId" element={<Biography />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CharactersContext.Provider>
  );
};

export default App;
