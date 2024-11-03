import React from 'react';
import heroImage from '../../assets/images/event-Planning.jpg';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';

const images = [image1, image4, image3, image2];

const EventPlanning = () => {
  return (
    <div
      id="about"
      className="mb-6 p-4 sm:p-8 bg-cover bg-center relative min-h-[500px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">

        {/* Text Section with Decorative Image */}
        <div className="relative flex flex-col items-center md:items-start w-full max-w-[400px] sm:max-w-[550px] bg-third/50 p-6 rounded-lg text-white mx-4 md:mx-0">
          <h1 className="text-center md:text-left text-white text-3xl mb-4 font-semibold">Aquila Press - Your Event Planning Partner</h1>
          <p className="text-[16px] sm:text-[17px] text-center md:text-left">
          At Aquila Press, we bring your events to life with a full suite of planning services tailored to your unique needs. From unforgettable weddings and seamless corporate gatherings to vibrant social celebrations and impactful product launches, our expert team ensures every detail is meticulously executed. With themed events that dazzle and effective event marketing strategies, we promise an experience that captivates and engages. Let us transform your vision into reality—because every great event deserves a perfect planner!
          </p>
          <div className='flex justify-center p-4'>
            <a href='#Contact'>
            <button className='py-3 px-6 rounded-full bg-white font-bold text-third'>
          Make My Event Unforgettable
            </button>
             </a>
        </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[500px] h-auto mx-4 lg:mr-16">
          {images.map((image, index) => (
            <div key={index} className="w-full h-auto overflow-hidden rounded-md shadow-lg group">
              <img
                src={image}
                alt={`Event Planning Gallery Image ${index + 1}`}
                className="w-full h-[150px] sm:h-[200px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EventPlanning;
