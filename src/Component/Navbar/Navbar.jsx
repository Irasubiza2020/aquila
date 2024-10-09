import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services'];
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
        <img src='/Aquila.png' className='h-[80px] ml-4 md:ml-16' alt="Aquila Logo" />
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle Menu' aria-expanded={isMenuOpen} className='focus:outline-none'>
            {isMenuOpen ? <FaTimes className='text-3xl text-primary' /> : <FaBars className='text-3xl text-primary' />}
          </button>
        </div>
        <div className={`md:static md:flex md:items-center md:gap-8 transition-all duration-200 ease-in-out z-10 ${isMenuOpen ? 'absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 p-6 block' : 'hidden md:block'}`}>
          <ul className='flex flex-col md:flex-row items-center md:mr-16 gap-4'>
            {['/', '#about', '#services', '/ourwork', '#contact'].map((link, index) => {
              const linkText = link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2);
              const isScrollLink = link.startsWith('#');
              return (
                <li key={index} className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg'>
                  {isScrollLink ? (
                    <ScrollLink to={link.slice(1)} smooth={true} duration={500} onClick={() => handleLinkClick(link)} className={activeLink === link ? 'text-third' : 'hover:text-third'}>
                      {linkText}
                    </ScrollLink>
                  ) : (
                    <Link to={link} onClick={() => handleLinkClick(link)} className={activeLink === link ? 'text-third' : 'hover:text-third'}>
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
