import React from 'react';
import backgroundImage from './download.jpg';

const Hero = () => {
  return (
    <div 
      className="bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center">
        <h1 className="text-black text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-black text-lg mb-8">Find the best products at unbeatable prices.</p>
        <a 
          href="/shop" 
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
