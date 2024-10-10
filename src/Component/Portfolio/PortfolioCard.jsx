import React from 'react';

const PortfolioCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
      
      {/* Project Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-800">{project.title}</h2>
      
      {/* Project Description */}
      <p className="mt-2 text-gray-600">{project.description}</p>
    </div>
  );
};

export default PortfolioCard;
