import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='duration-200 w-full shadow-md'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
        {/* Logo on the left */}
        <img 
          src='/Aquila.png' // Ensure the path is correct
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
            <li className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'>
              <a href='#home'>Home</a>
            </li>
            <li className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'>
              <a href='#about'>About</a>
            </li>
            <li className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'>
              <a href='#service'>Service</a>
            </li>
            <li className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'>
              <a href='#product'>Product</a>
            </li>
            <li className='p-2 md:p-0 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
