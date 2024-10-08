import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='duration-200 relative top-6 w-full shadow-md'>
      <div className='container flex justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
        {/* Logo on the left with left margin */}
        <img src='../Aquila.png' className='h-[80px] ml-16' alt="Aquila Logo" />

        {/* Menu button for mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-3xl text-primary' /> : <FaBars className='text-3xl text-primary' />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:gap-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex-col md:flex-row flex gap-4 py-4 md:py-0 md:mr-16 ${isMenuOpen ? 'absolute left-0 right-0 bg-white dark:bg-gray-900' : 'md:bg-transparent dark:md:bg-transparent'}`}>
            <li className='p-5 text-primary font-bold text-xl sm:text-2xl md:text-lg'><a href='#home'>Home</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#about'>About</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#service'>Service</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#product'>Product</a></li>
            <li className='p-5 font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
