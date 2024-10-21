import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './assets/pages/hero.jsx'; 
import About from './assets/pages/about.jsx'; // Ensure this path is correct
import Services from './assets/pages/services.jsx'; // Ensure this path is correct
import Contact from './assets/pages/Contact.jsx'; // Ensure this path is correct
import Shop from './assets/pages/shop.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
