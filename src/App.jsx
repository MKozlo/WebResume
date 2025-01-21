import './App.css';
import Nav from './sections/Nav/Nav';
import Profile from './sections/Profile/Profile';
import Strengths from './sections/Profile/Strengths';
import Motivation from './sections/Profile/Motivation';
import Career from './sections/Career/Career';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importuj React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Nagłówek (stały element) */}
      <Nav />

      {/* Definicja tras */}
      <Routes>
        {/* Strona główna */}
        <Route
          path="/"
          element={
            <>
              {/* Sekcja "O mnie" */}
              <Profile />
              <Strengths />
              <Motivation />
            </>
          }
        />

        {/* Strona Kariera */}
        <Route path="/career" element={<Career />} />

        {/* Strona Projekty */}
        <Route path="/projects" element={<Projects />} />

        {/* Strona Kontakt */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
