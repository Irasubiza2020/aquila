import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // State to track the active link

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
    setIsMenuOpen(false); // Close the menu after selecting a link
  };

  // Effect to handle scroll and update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services']; // Add IDs of your sections
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { offsetTop, clientHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
            setActiveLink(`#${section}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='duration-200 w-full shadow-md'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
        {/* Logo on the left */}
        <img 
          src='/Aquila.png' 
          className='h-[80px] ml-4 md:ml-16'
          alt="Aquila Logo" 
        />

        {/* Menu button for mobile */}
        <div className='md:hidden'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label='Toggle Menu' 
            aria-expanded={isMenuOpen} 
            className='focus:outline-none'
          >
            {isMenuOpen ? (
              <FaTimes className='text-3xl text-primary' />
            ) : (
              <FaBars className='text-3xl text-primary' />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:static md:flex md:items-center md:gap-8 transition-all duration-200 ease-in-out z-10 ${isMenuOpen ? 'absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 p-6 block' : 'hidden md:block'}`}>
          <ul className='flex flex-col md:flex-row items-center md:mr-16 gap-4'>
            {['/', '#about', '#services', '/ourwork', '#contact'].map((link, index) => {
              const linkText = link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2); // Generate link text from URL
              const isScrollLink = link.startsWith('#'); // Check if it's a scroll link
              return (
                <li key={index} className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg'>
                  {isScrollLink ? (
                    <ScrollLink 
                      to={link.slice(1)} // Remove the '#' for the scroll link
                      smooth={true} // Smooth scrolling
                      duration={500} // Duration for the scrolling effect
                      onClick={() => handleLinkClick(link)} // Update active link on click
                      className={activeLink === link ? 'text-third' : 'hover:text-third'} // Active class
                    >
                      {linkText}
                    </ScrollLink>
                  ) : (
                    <Link 
                      to={link}
                      onClick={() => handleLinkClick(link)} // Update active link on click
                      className={activeLink === link ? 'text-third' : 'hover:text-third'} // Active class
                    >
                      {linkText}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
