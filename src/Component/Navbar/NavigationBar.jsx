import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class NavigationBar extends Component {
  state = {
    isOpen: false, // State to manage the mobile menu visibility
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen }); // Toggle menu open/close
  };

  render() {
    return (
      <div className='flex items-center justify-between p-4 mr-6 ml-6'>
        <img src='../Aquila.png' alt='logo' className='h-20' />
        <div className='ml-auto md:hidden'>
          {/* Hamburger menu button for mobile view */}
          <button onClick={this.toggleMenu} className='text-xl'>
            {this.state.isOpen ? '✖' : '☰'} {/* Toggle icon */}
          </button>
        </div>
        <nav className={`md:flex ${this.state.isOpen ? 'block' : 'hidden'} md:block`}>
          {/* Navigation links */}
          <ol className='flex flex-col md:flex-row gap-6 text-lg md:text-xl text-primary'>
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
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
