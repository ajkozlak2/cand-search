import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch'; 
import NotFound from './components/NotFound';
import About from './pages/About'; // Import the About component
import Portfolio from './pages/Portfolio'; // Import the Portfolio component
import Contact from './pages/Contact'; // Import the Contact component

function App() {
  return (
    <Router>
      <>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<CandidateSearch />} />
            <Route path="/about" element={<About />} /> {/* Route for About page */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Route for Portfolio page */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 Not Found */}
          </Routes>
          <Outlet />
        </main>
      </>
    </Router>
  );
}

export default App;
