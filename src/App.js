import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Biography from './pages/Biography/Biography';
import Characters from './pages/Characters/Characters';
import Contacts from './pages/Contacts/Contacts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:characterId" element={<Biography />} />
        <Route path="contacts" element={<Contacts />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
