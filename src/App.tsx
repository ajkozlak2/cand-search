import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch'; 
import NotFound from './components/NotFound';
import About from './pages/About'; 
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 

function App() {
  return (
    <Router>
      <>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<CandidateSearch />} /> {/* Main page */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 Not Found */}
          </Routes>
          <Outlet />
        </main>
      </>
    </Router>
  );
}

export default App;