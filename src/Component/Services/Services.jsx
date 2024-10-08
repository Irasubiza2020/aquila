import React, { Component } from 'react';

class Services extends Component {
  // Array of services
  servicesData = [
    {
      id: 1,
      title: 'Branding',
      description: 'At Aquila Press, we create impactful brand identities that resonate with your audience. Our branding services include:',
      imgSrc: '../images/br1.png',
      servicesList: [
        'Brand Identity Development',
        'Brand Strategy',
        'Rebranding',
      ],
    },
    {
      id: 2,
      title: 'Design',
      description: 'We provide creative design solutions that communicate your brand message effectively. Our design services include:',
      imgSrc: '../images/br1.png',
      servicesList: [
        'Graphic Design',
        'Web Design',
        'Print Design',
      ],
    },
    {
      id: 3,
      title: 'Marketing',
      description: 'Our marketing services help you reach your target audience effectively. We offer:',
      imgSrc: '../images/br1.png', 
      servicesList: [
        'Digital Marketing',
        'Content Marketing',
        'Social Media Marketing',
      ],
    },
    {
      id: 4,
      title: 'Consulting',
      description: 'We offer expert consulting services to help you navigate your business challenges. Our consulting services include:',
      imgSrc: '../images/br1.png',
      servicesList: [
        'Business Strategy',
        'Market Research',
        'Financial Consulting',
      ],
    },
    {
      id: 5,
      title: 'Development',
       description: 'Our development services help you build robust and scalable applications. We offer:',
       imgSrc: '../images/br1.png', 
        servicesList: [
        'Web Development',
        'Mobile App Development',
        'Software Development',
      ],
    },
  ];

  render() {
    return (
      <div className='mb-6'>
        <h1 className='text-center text-3xl text-primary font-bold'>
          <span className='text-secondary'>Services Offered </span>by Aquila Press
        </h1>
        <div className='flex flex-wrap justify-center'>
          {this.servicesData.map((service) => (
            <div key={service.id} className='py-2 w-80 bg-tertiary rounded-xl shadow-md m-4'>
              {/* Image */}
              <img src={service.imgSrc} alt={service.title} className='rounded-xl' />
              <div className='mb-4 mt-4'>
                <h1 className='text-center font-semibold text-primary text-3xl'>{service.title}</h1>
                <p className='mt-1 text-[12px] text-center'>{service.description}</p>
                <ol className='text-center text-primary font-semibold mt-2 list-decimal list-inside space-y-2'>
                  {service.servicesList.map((subService, index) => (
                    <li key={index}>{subService}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
