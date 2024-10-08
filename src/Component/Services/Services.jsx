import React, { Component } from 'react';

class Services extends Component {
  // Array of services
  servicesData = [
    {
      id: 1,
      title: 'Branding',
      description: 'At Aquila Press, we create impactful brand identities that resonate with your audience. Our branding services include:',
      imgSrc: '../images/wxz.jpg',
      servicesList: ['Brand Identity Development', 'Brand Strategy', 'Rebranding'],
    },
    {
      id: 2,
      title: 'Design',
      description: 'We provide creative design solutions that communicate your brand message effectively. Our design services include:',
      imgSrc: '../images/qsd.jpg',
      servicesList: ['Graphic Design', 'Web Design', 'Print Design'],
    },
    {
      id: 3,
      title: 'Marketing',
      description: 'Our marketing services help you reach your target audience effectively. We offer:',
      imgSrc: '../images/Mar.jpg',
      servicesList: ['Digital Marketing', 'Content Marketing', 'Social Media Marketing'],
    },
    {
      id: 4,
      title: 'Consulting',
      description: 'We offer expert consulting services to help you navigate your business challenges. Our consulting services include:',
      imgSrc: '../images/br2.png',
      servicesList: ['Business Strategy', 'Market Research', 'Financial Consulting'],
    },
    {
      id: 5,
      title: 'Development',
      description: 'Our development services help you build robust and scalable applications. We offer:',
      imgSrc: '../images/web.jpg',
      servicesList: ['Web Development', 'Mobile App Development', 'Software Development'],
    },
  ];

  render() {
    return (
      <div  id='services' className='mb-6'>
        <h1 className='  text-center text-3xl text-primary font-bold'>
          <span className='text-third'>Services Offered </span>by Aquila Press
        </h1>
        <div className='flex flex-wrap justify-center'>
          {this.servicesData.map((service) => (
            <div
              key={service.id}
              className='w-80 bg-tertiary rounded-xl shadow-md m-6 hover:bg-secondary/20 flex flex-col justify-between'
            >
              {/* Image with fixed size */}
              <img
                src={service.imgSrc}
                alt={service.title}
                className='w-full h-52 object-cover rounded-t-xl'
              />

              <div className='flex-grow p-4'>
                <h1 className=' font-semibold text-primary text-3xl mb-2'>
                  {service.title}
                </h1>
                <p className=' text-[12px] mb-4'>{service.description}</p>
                <ol className=' text-primary font-semibold mt-2 list-decimal list-inside space-y-2'>
                  {service.servicesList.map((subService, index) => (
                    <li key={index}>{subService}</li>
                  ))}
                </ol>
              </div>

              {/* Button always at the bottom */}
              <div className='flex justify-center p-4'>
                <button className='py-3 px-6 rounded-full bg-secondary font-bold text-white'>
                  Get Services
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
