import React, { Component } from 'react';

class NavigationBar extends Component {
  state = {
    isOpen: false, // State to manage the mobile menu visibility
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen }); // Toggle menu open/close
  };

  render() {
    return (
      <div className='flex items-center justify-between p-4 mr-16 ml-16'>
        <img src='../Aquila.png' alt='logo' className='h-20' />
        <div className='ml-auto md:hidden'>
          {/* Hamburger menu button for mobile view */}
          <button onClick={this.toggleMenu} className='text-xl'>
            {this.state.isOpen ? '✖' : '☰'} {/* Toggle icon */}
          </button>
        </div>
        <nav className={`md:flex ${this.state.isOpen ? 'block' : 'hidden'} md:block`}>
          {/* Navigation links */}
          <ol className='flex flex-col md:flex-row gap-6 text-lg md:text-xl text-primary '>
            <li className=' hover:text-third '><a href='#'>Home</a></li>
            <li  className=' hover:text-third'><a href='#'>About Us</a></li>
            <li className=' hover:text-third'><a href='#'>Services</a></li>
            <li className='hover:text-third'><a href='#'>Our Work</a></li>
            <li className='hover:text-third'><a href='#'>Contact</a></li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
