// App.tsx
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
    </>
  );
}

export default App;