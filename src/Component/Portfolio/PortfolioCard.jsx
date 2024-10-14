import React from 'react';

const PortfolioCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4  transform transition duration-500 hover:scale-105 hover:shadow-lg">
      {/* Project Image */}
      <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />

      {/* Project Title */}
      <h2 className="mt-4 text-xl  text-secondary">{project.title}</h2>

      {/* Project Description */}
      <p className="mt-2 text-primary">{project.description}</p>

      {/* Styled Button */}
      <button className="mt-3 px-6 py-2 bg-secondary text-white  rounded-lg hover:bg-third hover:scale-105 transition-transform duration-300">
        View Project
      </button>
    </div>
  );
};

export default PortfolioCard;