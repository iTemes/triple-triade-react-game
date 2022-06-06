import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Biography from "./pages/Biography/Biography";
import Characters from "./pages/Characters/Characters";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/LoginFormLayout";

import CharactersProvider from "./context/charactersContext";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CharactersProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="characters" element={<Characters />} />
          <Route path="about" element={<About />} />
          <Route path="characters/:characterId" element={<Biography />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CharactersProvider>
  );
};

export default App;
