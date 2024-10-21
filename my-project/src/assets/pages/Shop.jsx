// src/assets/pages/Shop.jsx

import React from 'react';
import Carousel from './carousel'; // Import the Carousel component
import borofone1 from './borofone1.jpg';
import borofone2 from './borofone2.jpg';
import borofone3 from './borofone3.jpg';
import hoco1 from './hoco1.jpg';
import hoco2 from './hoco2.jpg';
import hoco3 from './hoco3.jpg';
import greenlion1 from './greenlion1.jpg';
import greenlion2 from './greenlion2.jpg';
import greenlion3 from './greenlion3.jpg';

const products = [
  {
    id: 1,
    name: 'Borofone Earphones',
    description: 'This is a description for Borofone Earphones.',
    price: '$10.00',
    images: [
      borofone1, // Use imported images
      borofone2,
      borofone3,
    ],
  },
  {
    id: 2,
    name: 'Hoco Earphones EW77',
    description: 'This is a description for Hoco Earphones EW77.',
    price: '$20.00',
    images: [
      hoco1, // Use imported images
      hoco2,
      hoco3,
    ],
  },
  {
    id: 3,
    name: 'Green Lion Earphones',
    description: 'This is a description for Green Lion Earphones.',
    price: '$30.00',
    images: [
      greenlion1, // Use imported images
      greenlion2,
      greenlion3,
    ],
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <Carousel images={product.images} /> {/* Add the Carousel here */}
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300 mt-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
