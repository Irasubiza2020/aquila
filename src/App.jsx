import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services'; // Import Services component
import NavigationBar from './Component/Navbar/NavigationBar';
import MissionVision from './Component/MissionAndVision/MissionVision';
import Portfolio from './Component/Portfolio/portfolio';
import ContactUs from './Component/contact/ContactUs';
import Promotions from './Component/Promotions/Promotions';
import Testimonials from './Component/Testimonials/Testimonials';
import OurWork from './Component/ourWork/ourWork'; // OurWork as a separate page
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Define the home route to include Hero and other components */}
        <Route
          path="/"
          element={
            <>
              <Hero />
             {/*<Promotions />*/} 
              <Project />
              <AboutUs />
              <Services isHomePage={true} /> {/* Pass prop to show only 3 services */}
              <MissionVision />
              <Portfolio />
              <Testimonials />
              <ContactUs />
              <Footer/>
            </>
          }
        />
        {/* Separate routes for other pages */}
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services isHomePage={false} />} /> {/* Pass prop to show all services */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
