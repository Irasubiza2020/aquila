import React from 'react';

const PortfolioCard = ({ project }) => {
  return (
    <div className='ml-16 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 max-w-[400px] sm:max-w-[350px] md:max-w-[300px]'>
      <img src={project.imgSrc} alt={project.title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold text-secondary'>{project.title}</h2>
        <p className='text-gray-600'>{project.description}</p>
      </div>
      <div className='p-4'>
        <button className='w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary font-semibold'>
          View Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
