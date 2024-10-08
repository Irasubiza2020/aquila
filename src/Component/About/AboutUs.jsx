import React from 'react';

const AboutUs = () => {
  return (
    <div className='mb-6'>
      <div className='mt-16 flex flex-col md:flex-row justify-between items-center mb-4'>
        <div className=' ml-16 h-auto w-full max-w-[500px] mx-4 bg-tertiary shadow-lg rounded-md'>
          <img src='../ab.jpg' alt='About Aquila' className='w-full h-auto rounded-md' />
        </div>
        <div className='w-full max-w-[550px] mx-4 mr-16'>
          <h1 className='text-center text-primary font-bold text-3xl mb-2'>About Us</h1>
          <p className='text-[17px]'>
            At Aquila, we specialize in branding, printing, digital marketing, and social media management, helping businesses elevate their presence in today's competitive landscape. Our mission is to provide tailored solutions that resonate with your brand’s identity and engage your audience effectively.<br /> Whether it's crafting visually stunning designs, delivering high-quality print materials, or executing impactful digital campaigns, our team is dedicated to ensuring that your brand stands out. With a focus on creativity, strategy, and customer satisfaction, Aquila is here to bring your vision to life and help you achieve lasting success in the digital and physical world.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <button className='py-4 px-6 rounded-full bg-primary text-white font-semibold'>
          Let’s Make Your Brand Shine!
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
