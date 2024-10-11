// src/Component/Promotions/Promotions.js

import React from 'react';
import branding2 from '../../assets/images/branding2.jpg'

const Promotions = () => {
  const promotions = [
    {
      title: "20% Off on All Books",
      description: "Get 20% off your first purchase. Use code: FIRST20",
      image: branding2 , // replace with actual image path
      link: "#"
    },
    {
      title: "Buy One Get One Free",
      description: "Buy any item and get another one free!",
      image:branding2, // replace with actual image path
      link: "#"
    },
    {
        title: "Buy One Get One Free",
        description: "Buy any item and get another one free!",
        image:branding2, // replace with actual image path
        link: "#"
      }
     
  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Current Promotions</h2>
      <div className="flex flex-wrap justify-center">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg m-4 p-6 w-80">
            <img src={promo.image} alt={promo.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
            <p className="text-gray-700 mb-4">{promo.description}</p>
            <a href={promo.link} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Your Discount
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions
