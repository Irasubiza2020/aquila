import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';

import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';

function App() {
  return(
    <>
  <Navbar/>
  <Hero/>
  <Project/>
  <AboutUs/>
    </>
  )
}
  
 
export default App;
