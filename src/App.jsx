import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero'; // Ensure this is included for the home page
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services';
import Portfolio from  './Component/Portfolio/portfolio' // Ensure correct casing for Portfolio
import OurWork from './Pages/ourWork' // Ensure correct path and casing for OurWork

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div> 
            <div id=""><Project /></div>
            <div id="about"><AboutUs /></div>
            <div id="portfolio"><Services /></div>
            <div id="contact"><Portfolio /></div>
          </>
        } />
        {/* Route for the Our Work page */}
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
