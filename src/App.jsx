// This file, App.jsx, serves as the main entry point for the React application. It sets up the overall structure of the application
// by defining the routing using React Router. Sometimes the routing is done in main.jsx, but I have made the decision to do it here. 
// The application consists of different pages, each represented by a component.
// The pages AboutMe, Portfolio, Contact, and Resume are rendered based on the specified routes.

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

