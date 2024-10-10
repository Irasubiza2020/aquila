import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail, MdAddIcCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j7nalsl',        // connection to emailjs 
        'template_cem9ira',     
        form.current,
        'HUf49LkCQwu-O1q16'       
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for reaching out! I’ll get back to you soon.');  
          form.current.reset();                 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');  // Error alert
        }
      );
  };

  return (
    <div className='mt-6 px-4 sm:px-6 lg:px-16'>
      {/* Heading */}
      <h1 id='Contact' className='font-bold text-3xl mt-8 mb-2 text-center text-primary'>
        Contact Us
      </h1>
      <p className='w-full sm:w-[80%] md:w-[70%] lg:w-[620px] mx-auto mt-3'>
        Have questions or need assistance? Fill out the form below! We specialize in branding, marketing, printing, and design. Our dedicated team is ready to help bring your vision to life and elevate your brand. Let’s create something amazing together—we'll get back to you soon!
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-start mt-10'>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className='w-full lg:w-1/2 p-4 lg:pr-8'>
          <label className="block mb-2 text-lg font-semibold text-primary">Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" 
            required 
          />

          <label className="block mb-2 text-lg font-semibold text-primary">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" 
            required 
          />

          <label className="block mb-2 text-lg font-semibold text-primary">Message</label>
          <textarea 
            name="message" 
            className="border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" 
            required 
          />

          <input 
            type="submit" 
            value="Send" 
            className="bg-secondary mt-4 text-white rounded-lg p-3 hover:bg-opacity-90 transition duration-300 w-full font-semibold" 
          />
        </form>

        {/* Message and stats section */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 mt-6'>
          <img 
            src='../images/ctus.jpg' 
            className='rounded-xl mt-6 w-full h-auto' 
            alt="Contact Us" 
          />

          <div className='h-auto w-full lg:w-[500px] p-3 mt-4 rounded-lg bg-tertiary shadow-md flex flex-col items-start'>
            <div className='flex flex-col items-start space-y-6'>
              <div className='flex items-center space-x-4'>
                <MdOutlineEmail size={40} className='text-primary' />
                <div className='text-left'>
                  <h1 className='font-bold text-primary'>E-mail</h1>
                  <h2 className='text-primary'>godfreytumusime2@gmail.com</h2>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <MdAddIcCall size={40} className='text-primary' />
                <div className='text-left'>
                  <h1 className='font-bold text-primary'>Phone</h1>
                  <h2 className='text-primary'>+250788287674</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
