import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services';
import Portfolio from  './Component/Portfolio/portfolio';
import OurWork from './Pages/ourWork';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Hero />
            <Project />
            <AboutUs />
            <Services />
            <Portfolio />
          </div>
        } />
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
