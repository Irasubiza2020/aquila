import React from 'react'
import Hero  from './Component/Hero/Hero'
import Project  from './Component/Project/Project'
import AboutUs from './Component/About/AboutUs'
import Services from './Component/Services/Services'
import NavigationBar from './Component/Navbar/NavigationBar'
import MissionVision from './Component/MissionAndVision/MissionVision'
import Portfolio from './Component/Portfolio/portfolio'
import ContactUs from './Component/contact/ContactUs'
 const App = () => {
  return (
    <>
    <NavigationBar/>
     <Hero/>
     <Project/>
     <AboutUs/>
     <Services/>
     <MissionVision/>
     <Portfolio/>
      <ContactUs/>
      </>
  )
}

export default App