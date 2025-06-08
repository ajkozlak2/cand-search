import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch'; // Adjust the path if necessary
// import OtherComponent from './components/OtherComponent'; // Adjust the path if necessary
import NotFound from './components/NotFound'; // This should be correct


function App() {
  return (
    <Router>
      <>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<CandidateSearch />} /> {/* This will render CandidateSearch at the root path */}
            {/* <Route path="other-route" element={<OtherComponent />} /> Example for another route */}
            {/* Add more routes as needed */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
          <Outlet />
        </main>
      </>
    </Router>
  );
}

export default App;
