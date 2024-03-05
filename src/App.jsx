import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/UI/HeaderWithNav/Header';
import Footer from './components/UI/Footer/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Render AboutMe for the root path */}
          <Route path="/" element={<AboutMe />} />
          <Route
            path="/"
            element={
              <>
              {/* Use Outlet for nested routes */}
                <Outlet />
              </>
            }
          >
            {/* Nested routes */}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

