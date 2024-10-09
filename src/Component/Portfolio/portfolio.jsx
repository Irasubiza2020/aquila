import React from 'react';
 import PortfolioCard from  '../Portfolio/PortfolioCard';
 import br1 from '../../assets/images/br1.png'

const Portfolio = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Branding',
      description: ' Our branding projects highlight our expertise in creating distinctive identities that resonate with target audiences. From logo design to comprehensive brand guidelines, we ensure every element reflects your core values and vision. Explore how we help businesses stand out in a crowded marketplace.',
      imgSrc: br1,
      category: ' design',
    },
    {
      id: 2,
      title: 'Marketing',
      description: 'Effective marketing is about more than just reaching an audience; it’s about engaging and converting them. Our marketing portfolio showcases a variety of campaigns tailored to connect with customers. Discover how we leverage data-driven strategies and creative content to elevate brands and drive results.',
      imgSrc: '/path-to-image2.jpg',
      category: 'Branding',
    },
    {
      id: 2,
      title: 'Printing',
      description: 'In our printing section, we emphasize our commitment to quality and precision in every printed piece. From brochures and business cards to large-scale banners, we use the latest technology to ensure vibrant colors and sharp details. See how our printing solutions help bring your brand’s vision to life with tangible materials.',
      imgSrc: '/path-to-image2.jpg',
      category: 'Branding',
    },
    // Add more projects
  ];

  return (
    <div className='mr-16 ml-16'>
      {/* Header section */}
      <div  >
        <h1 className='font-bold text-3xl mt-8 mb-2'>Portfolio</h1>
        <p className=' w-[620px] '>
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
