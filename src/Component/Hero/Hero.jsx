import React from 'react';
import heroImage from '../../assets/images/hero1.png';

const Hero = () => {
  return (
    <div id='home'
      className='relative min-h-[400px] sm:min-h-[650px] bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-primary bg-opacity-60'></div>

      {/* Content */}
      <div className='container relative z-10 px-4 sm:px-8 lg:px-12 py-8 sm:py-16 mt-6'>
        <div className='flex flex-col items-center text-center'>
          
          {/* Text content */}
          <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl text-white mt-1'>
            Empower Your Story, Shape the Future of Publishing
          </h1>

          {/* Description */}
          <p className='text-white text-base sm:text-lg lg:text-xl mt-4 max-w-xl'>
            At Aquila Press, we fuse creativity with precision. From traditional print to cutting-edge digital media, we turn your vision into powerful content that resonates.
          </p>

          {/* Button */}
          <div className='mt-16'>
            <a href='#services'>
              <button className='font-bold bg-third text-white text-lg sm:text-2xl py-3 px-6 rounded-md hover:bg-primary hover:text-white'>
                Discover Our Expertise
              </button>
            </a>
          </div>
          <p className='mt-16 text-white font-extrabold'>Start your publishing journey today !!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
