import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services';
import OurWork from './Pages/ourWork'; 
import Contact from './Component/contact/contact'

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
            <Contact/>
            
          
        </div>
        } />
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
