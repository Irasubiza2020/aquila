import React from 'react';
 import PortfolioCard from  '../Portfolio/PortfolioCard';
 import br1 from '../../assets/images/br1.png'

const Portfolio = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Branding',
      description: ' all kind  of branding of campany',
      imgSrc: br1,
      category: ' design',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      imgSrc: '/path-to-image2.jpg',
      category: 'Branding',
    },
    // Add more projects
  ];

  return (
    <div>
      {/* Header section */}
      <div className='ml-16 mr-16'>
        <h1 className='font-bold text-3xl mt-8 mb-2'>Portfolio</h1>
        <p className='text-center'>
          Explore the creativity and precision behind our work. From innovative designs to expertly published projects, our portfolio showcases the heart of what we do. 
          <span className='text-third font-semibold'> See how we bring ideas to life</span> and why clients trust us with their vision.
        </p>
      </div>

      {/* Body section of portfolio */}
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
