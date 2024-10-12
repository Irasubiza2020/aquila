import React from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative mt-16 mr-6">
      <div className="min-h-0.5 bg-primary ml-16 mr-16 max-w-full"></div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 mt-9 w-full px-8 ml-6">
        <div>
          <div className="flex items-center mb-4">
            <img src='../Aquila.png' alt='logo' className='h-20' />
          </div>
          <p className='text-primary'>Transforming Ideas into Impact!</p>
          <p className='text-secondary'>✨ Branding | Marketing | Design ✨</p>
          <p className='text-primary'>Let us elevate your brand and captivate your audience with our creative solutions!</p>
          <div className='flex space-x-4'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className='flex items-center justify-center w-10 h-10 rounded-full hover:text-black hover:bg-secondary text-primary'>
                <CiFacebook className='text-2xl' />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className='flex items-center justify-center w-10 h-10 rounded-full hover:text-black hover:bg-secondary text-primary'>
                <CiLinkedin className='text-2xl' />
              </div>
            </a>
            <a href="https://www.instagram.com/aquila_press/profilecard/?igsh=bmJmMmJycThkbGg4" target="_blank" rel="noopener noreferrer">
              <div className='flex items-center justify-center w-10 h-10 rounded-full hover:text-black hover:bg-secondary text-primary'>
                <FaInstagram className='text-2xl' />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className='flex items-center justify-center w-10 h-10 rounded-full hover:text-black hover:bg-secondary text-primary'>
                <FaSquareXTwitter className='text-2xl' />
              </div>
            </a>
          </div>
        </div>

        <div className="items-center  md:flex-col md:items-end">
          <h1 className='font-bold text-3xl mb-4 text-primary'>Quick Links</h1>
          <ol className=' md:flex-row gap-6 text-lg md:text-xl text-primary md:justify-end'>
            <li className='hover:text-third'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-third'>
              <Link to="/about-us">About Us</Link>
            </li>
            <li className='hover:text-third'>
              <Link to="/services">Services</Link>
            </li>
            <li className='hover:text-third'>
              <Link to="/our-work">Our Work</Link>
            </li>
            <li className='hover:text-third'>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ol>
        </div>

        <div className="flex flex-col">
          <h1 className='font-bold text-3xl mb-4 text-primary'>Contact Info</h1>
          <ul className='space-y-2'>
            <li className='font-bold'> Location:<span className='font-normal'>Kigali,</span> <span className='text-primary'> Rwanda</span> </li>
            <li><a href="mailto:aquilapress@info.com" className='font-bold'>Email: <span className='font-normal'>aquilapress@info.com</span></a></li>
            <li><a href="tel:+250787954412" className='font-bold'>Phone:<span className='font-normal'>+250732527666</span></a></li>
            <li><a href="#" className='font-semibold text-primary'>View Location on GoogleMap</a></li>
          </ul>
        </div>
      </div>
      <div className="min-h-0.5 bg-primary ml-16 mr-16 max-w-full mt-6"></div>
      <div className='flex text-center justify-center mt-6 mb-6 text-[20px] font-semibold text-primary'> Copyright © 2023 Aquila Press. All rights reserved. </div>
    </div>
  );
}

export default Footer;
