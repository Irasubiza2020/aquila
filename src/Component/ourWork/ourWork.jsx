import React, { Component } from 'react';
import ProjectImages from '../../assets/images/ab2.png'; // Import image
import web23 from '../../assets/images/web23.png'
import web22  from '../../assets/images/web22.png'
import web21 from '../../assets/images/web21.png'
import web25 from '../../assets/images/web25.png'
class OurWork extends Component {  
  // Array of image sources (you can add more images here)
  images = [ProjectImages, web23, web22, web21 , web25];

  render() {
    return (
      <div className='px-4 py-6b mr-6'>
        <h1 className='text-primary text-center text-2xl md:text-3xl mb-4'>
          Recent <span className='text-third'>Branding</span> Project
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {/* Mapping through the image array to dynamically display images */}
          {this.images.map((image, index) => (
            <div
              key={index}
              className='relative border border-gray-300 p-2 rounded-lg overflow-hidden' // Add a border around each image
            >
              <img
                src={image}
                alt={`Branding Project ${index + 1}`}
                className='w-full h-full object-cover transition-transform duration-200 transform hover:scale-105' // Ensure images cover the div and scale on hover
              />
              {/* Plus sign in bottom-right corner */}
              <div className='absolute bottom-2 right-2 bg-white text-xl rounded-full p-1 shadow-md'>
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OurWork;
