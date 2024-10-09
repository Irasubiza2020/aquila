import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import AboutUs from './Component/About/AboutUs';
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio'; // Ensure the correct case
import OurWork from './Pages/OurWork'; // Ensure the correct case

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div>
            <div id="project"><Project /></div> {/* Consider giving it an ID */}
            <div id="about"><AboutUs /></div>
            <div id="services"><Services /></div> {/* Changed from portfolio to services */}
            <div id="portfolio"><Portfolio /></div>
          </>
        } />
        {/* Route for the Our Work page */}
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
