import React from 'react';
import Slider from 'react-slick';
import profile1 from '../../assets/images/profile1.png'
import profile2 from '../../assets/images/profile2.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Aquila Press offers exceptional service and quality products! Highly recommend.",
      image: profile1// Replace with actual image path
    },
    {
      name: "Jane Smith",
      feedback: "The team at Aquila Press is knowledgeable and always willing to help. Love their products!",
      image: profile2 // Replace with actual image path
    },
    {
      name: "Samuel Adams",
      feedback: "I had a fantastic experience shopping at Aquila Press. Fast delivery and great quality!",
      image:profile1// Replace with actual image path
    },

  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Default to 1 for small screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640, // Small screens (e.g., phones)
        settings: {
          slidesToShow: 1, // 1 slide
        },
      },
      {
        breakpoint: 768, // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 1, // 2 slides
        },
      },
      {
        breakpoint: 1024, // Large screens (e.g., desktops)
        settings: {
          slidesToShow: 2, // 3 slides
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">What Our Customers Say</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white max-w-[300px] shadow-lg rounded-lg mx-2 my-4 p-4 flex flex-col items-center">
              <div className="flex justify-center items-center mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{testimonial.name}</h3>
              <p className="text-gray-700 text-center text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
