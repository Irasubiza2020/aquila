import React from 'react';
import Slider from 'react-slick';
import Comp1 from '../../assets/images/Comp1.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Function to return an array of card data
const CardData = () => [
  {
    id: 1,
    img: Comp1,
    title: 'Patriot BBc',
    disc: 'branding and designing   t-shit for summer kid camp',
  },
  {
    id: 2,
    img: Comp1,
    title: 'Patriot BBc',
    disc: 'branding and designing   t-shit for summer kid camp',
  },
  {
    id: 3,
    img: Comp1,
    title: 'Patriot BBc',
    disc: 'branding and designing   t-shit for summer kid camp',
  },{
    id: 4,
    img: Comp1,
    title: 'Patriot BBc',
    disc: 'branding and designing   t-shit for summer kid camp',
  },
  
  
  
   
 
];

const Project = () => {
  const cards = CardData(); 

  // Slider settings
  const settings = {
    dots: true ,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto px-4 mt-8'>
      <h1 className='text-center font-bold text-primary text-3xl mb-14 mt-5 sm:mt-0 lg:text-5xl sm:text-4xl'>
      Trusted By Leading  <span className='text-secondary'>Companies</span></h1>
    <p className=' text-center mb-10 text-[20px]'>Join the list of satisfied clients who rely on us for everything from traditional printing to innovative marketing solutions and branding, bringing your business to life across all social platforms</p>
      {/* Slider for recent projects */}
      <Slider {...settings} className='space-x-2'>
        {cards.map(({ id, img, title, disc }) => (
          <div key={id} className='p-4'>
            <div className='text-secondary shadow-md rounded-lg overflow-hidden relative group max-w-xs mx-auto'>
              <img
                src={img}
                alt={title}
                className='w-[500px] h-[400px] object-cover rounded-t-lg'/>

              {/* Overlay section */}
              <div className='absolute left-0 top-0 w-full h-full bg-primary/70 opacity-0 group-hover:opacity-100 p-4 backdrop-blur-sm duration-500 flex flex-col items-center justify-center'>
                {/* Title */}
                <h2 className='text-white font-bold text-lg text-center mb-2'>
                  {title}
                </h2>

                {/* Description */}
                <p className='text-white text-sm text-center'>{disc}</p>

                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;