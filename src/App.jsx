import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services';

function App() {
  return(
    <>
  <Navbar/>
  <Hero/>
  <Project/>
  <AboutUs/>
  <Services/>
    </>
  )
}
  
 
export default App;
